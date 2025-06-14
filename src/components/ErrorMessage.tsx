function ErrorMessage({ error }: { error: string }) {
  if (!error) return null;

  return <div className="mt-4 text-red-600 text-lg font-medium">{error}</div>;
}

export default ErrorMessage;
