type Props = {
  question: string;
  setQuestion: (value: string) => void;
  generateAnswer: (e: React.FormEvent<HTMLFormElement>) => void;
  generating: boolean;
};

function QuestionForm({
  question,
  setQuestion,
  generateAnswer,
  generating,
}: Props) {
  return (
    <form
      onSubmit={generateAnswer}
      className="w-full max-w-2xl bg-white rounded-xl shadow-xl border border-indigo-200 p-6 transition-all duration-300"
    >
      <label className="block text-lg font-semibold text-indigo-800 mb-2">
        ✍️ أدخل سؤالك أو اطلب إنشاء أسئلة:
      </label>
      <textarea
        required
        className="border border-indigo-300 rounded-lg w-full h-32 p-4 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-50 text-indigo-900 placeholder-indigo-400"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="مثلاً: اشرح الجهاز الهضمي / أنشئ لي 5 أسئلة في مادة الرياضيات"
      ></textarea>
      <button
        type="submit"
        className={`w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ${
          generating ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={generating}
      >
        {generating ? " جاري التحليل...⏳" : "إرسال 🚀"}
      </button>
    </form>
  );
}

export default QuestionForm;
