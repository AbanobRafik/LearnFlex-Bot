import ReactMarkdown from "react-markdown";

function AnswerBox({ answer }: { answer: string }) {
  if (!answer) return null;

  return (
    <div className="mt-8 w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 border border-indigo-100">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4 text-center">
        الإجابة:✅
      </h2>
      <div className="prose max-w-none text-indigo-900 leading-relaxed">
        <ReactMarkdown>{answer}</ReactMarkdown>
      </div>
    </div>
  );
}

export default AnswerBox;
