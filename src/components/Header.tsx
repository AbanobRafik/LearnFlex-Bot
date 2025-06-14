function Header() {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center drop-shadow-sm">
        🤖 LearnFlex Bot
      </h1>
      <p className="text-indigo-600 text-lg mb-8 text-center max-w-xl">
        أنا شات بوت مخصص لتطبيق <strong>LearnFlex</strong>. <br />
        اسأل عن أي موضوع يخص دروسك، وسأقدم لك شرحًا مبسطًا وواضحًا. <br />
        كما يمكنك أن تطلب مني إنشاء مجموعة أسئلة حول أي درس تختاره، أو تطلب
        المساعدة إذا واجهتك مشكلة في التطبيق.
      </p>
    </>
  );
}

export default Header;
