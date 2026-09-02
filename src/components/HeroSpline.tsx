import { useEffect, useState } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// Public demo scene from Spline's own examples — swap for a custom Big Bang
// University scene (spline.design) before shipping this to production.
const DEMO_SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

function SceneFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_60%_40%,rgba(0,230,168,0.12),transparent_60%)]">
      <div className="h-40 w-40 rounded-full border border-neon/20 shadow-[var(--shadow-glow-neon)]" />
    </div>
  );
}

export function HeroSpline() {
  // Skip mounting the ~1MB+ WebGL runtime on small/narrow viewports so
  // mobile visitors aren't paying for a scene they'd barely see.
  const [canRender3D, setCanRender3D] = useState(false);
  // The Spline scene loads from a third-party CDN — network hiccups, ad
  // blockers or the scene going offline must never take the rest of the
  // card (headline, copy, CTA) down with them.
  const [sceneFailed, setSceneFailed] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    setCanRender3D(query.matches);
    const onChange = (event: MediaQueryListEvent) => setCanRender3D(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!canRender3D) return;
    const onRejection = (event: PromiseRejectionEvent) => {
      const reason = String(event.reason?.message ?? event.reason ?? "");
      if (/spline|fetch/i.test(reason)) setSceneFailed(true);
    };
    window.addEventListener("unhandledrejection", onRejection);
    return () => window.removeEventListener("unhandledrejection", onRejection);
  }, [canRender3D]);

  return (
    <Card className="relative h-[420px] w-full overflow-hidden rounded-2xl border-border-soft bg-black/[0.96] md:h-[520px]">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />

      <div className="flex h-full flex-col md:flex-row">
        <div className="relative z-10 flex flex-1 flex-col justify-center p-8 md:p-10">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-neon">
            Sistemas de IA en acción
          </span>
          <h2 className="mt-4 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text font-display text-3xl font-bold text-transparent md:text-4xl">
            El claustro que nunca duerme
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-300 md:text-base">
            BBU Strategy Core, Sales Intelligence y Market Radar trabajan en paralelo, 24/7, entrenando a cada
            alumno con datos reales — no con la disponibilidad de una sola persona.
          </p>
          <a
            href="/claustro-ia/"
            className="mt-6 inline-flex w-fit items-center gap-1.5 font-display text-sm font-semibold text-neon transition-colors hover:text-neon-soft"
          >
            Conoce el Claustro de IA
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="relative flex-1">
          {canRender3D && !sceneFailed ? (
            <ErrorBoundary fallback={<SceneFallback />}>
              <SplineScene scene={DEMO_SCENE_URL} className="h-full w-full" />
            </ErrorBoundary>
          ) : (
            <div className="hidden h-full md:block">
              <SceneFallback />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
