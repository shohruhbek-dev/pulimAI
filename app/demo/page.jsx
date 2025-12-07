export default function DemoPage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Inter, -apple-system, sans-serif", color: "#111", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "20px", textAlign: "center" }}>Pulim AI – Demo Page</h1>

      {/* Demo Video */}
      <section style={{ marginTop: "50px", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "20px" }}>Demo Video</h2>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}>
          <iframe
            src="https://www.youtube.com/embed/tLSTSnl2zqI?si=5CHE1M4TvtcD6AH6"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </section>

      {/* Video Description */}
      <section style={{ marginTop: "60px", lineHeight: "1.7" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "20px" }}>Video Description</h2>
        <div style={{ background: "#f9f9f9", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>Pulim AI — Aqlli moliyaviy ekotizim</h3>
          <p style={{ marginBottom: "16px" }}>
            Pulim AI — shaxsiy va biznes moliyasini toʻliq avtomatlashtiruvchi, sunʼiy intellektga asoslangan moliyaviy boshqaruv platformasi.
            Ushbu demo video orqali siz <strong>FinHelp</strong> va <strong>SmartBill</strong> modullarining amaliy ishlashini,
            real vaqt tahlillarini, AI yordamchi imkoniyatlarini va buxgalteriya avtomatlashtirilishini koʻrib chiqasiz.
          </p>

          <h4 style={{ fontSize: "20px", marginTop: "20px", marginBottom: "10px" }}>🔹 FinHelp — shaxsiy moliya boshqaruvi</h4>
          <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
            <li>Daromad va xarajatlarni avtomatik tahlil qilish</li>
            <li>Bank kartalarini yagona joydan boshqarish</li>
            <li>Oylik byudjet va jamg‘arma rejalari</li>
            <li>AI asosidagi shaxsiy moliyaviy tavsiyalar</li>
            <li>Kommunal va kredit to‘lovlarini monitoring qilish</li>
            <li>Real vaqt grafiklar va xarajat prognozlari</li>
          </ul>

          <h4 style={{ fontSize: "20px", marginTop: "20px", marginBottom: "10px" }}>🔹 SmartBill — biznes moliya va buxgalteriya</h4>
          <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
            <li>Avtomatik buxgalteriya (General Ledger)</li>
            <li>Invoice, bill, payroll va inventar boshqaruvi</li>
            <li>Soliq markazi (Tax Center) bilan integratsiya</li>
            <li>OCR yordamida hujjatlarni avtomatik tanish</li>
            <li>AI Accountant — xatolarni aniqlash va hisobotlar yaratish</li>
            <li>Real vaqt moliyaviy hisobotlar</li>
          </ul>

          <p style={{ marginTop: "16px" }}>
            <strong>Pulim AI</strong> — Oʻzbekistonga moslashtirilgan toʻliq moliyaviy ekotizim. Bu platforma ham shaxsiy foydalanuvchilar,
            ham kichik bizneslar uchun <em>aniq tahlil, aqlli tavsiya va toʻliq avtomatlashtirilgan boshqaruv</em>ni taqdim etadi.
          </p>

          <p style={{ marginTop: "12px", fontWeight: "600" }}>
            Agar siz moliyangizni tartibga solmoqchi, biznes jarayonlaringizni raqamlashtirmoqchi yoki AI yordamida yaxshiroq moliyaviy qarorlar qabul qilmoqchi boʻlsangiz — Pulim AI siz uchun.
          </p>
        </div>
      </section>

      {/* Prototype */}
      <section style={{ marginTop: "60px", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "600", marginBottom: "20px" }}>Prototype</h2>
        <a
          href="https://6935a9d9d2d0bbd14649eccb--tubular-pithivier-a3fa93.netlify.app/"
          target="_blank"
          style={{
            padding: "14px 28px",
            background: "#111",
            color: "white",
            borderRadius: "10px",
            display: "inline-block",
            textDecoration: "none",
            fontWeight: "600",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
       
        >
          Open Prototype
        </a>
      </section>
    </main>
  );
}
