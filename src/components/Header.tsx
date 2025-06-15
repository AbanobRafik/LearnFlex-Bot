function Header() {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-700 mb-4 sm:mb-6 text-center drop-shadow-sm">
        🤖 LearnFlex Bot
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-indigo-600 mb-6 sm:mb-8 text-center max-w-sm sm:max-w-md md:max-w-xl mx-auto px-4">
        أنا شات بوت مخصص لتطبيق <strong>LearnFlex</strong>. <br />
        اسأل عن أي موضوع يخص دروسك، وسأقدم لك شرحًا مبسطًا وواضحًا. <br />
        كما يمكنك أن تطلب مني إنشاء مجموعة أسئلة حول أي درس تختاره، أو تطلب
        المساعدة إذا واجهتك مشكلة في التطبيق.
      </p>
    </>
  );
}

export default Header;
