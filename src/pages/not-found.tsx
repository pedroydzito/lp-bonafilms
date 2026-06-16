export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0A0A0A] text-[#F2F2EE] px-6 text-center">
      <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-[#F2F2EE]/50 mb-6">
        Erro 404
      </p>
      <h1
        className="font-sans font-black leading-[0.85]"
        style={{ fontSize: "clamp(56px, 14vw, 160px)", letterSpacing: "-0.05em" }}
      >
        Página não<br />encontrada<span style={{ color: "var(--bona-red)" }}>.</span>
      </h1>
      <a
        href="/"
        className="link-underline mt-10 font-sans font-medium text-[16px] text-[#F2F2EE]"
      >
        Voltar para o início ↗
      </a>
    </div>
  );
}
