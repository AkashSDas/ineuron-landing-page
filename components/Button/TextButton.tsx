export default function TextButton({ label }) {
  return (
    <button className="h-[50px] text-black hover:bg-light-violet px-[2rem] rounded-full">
      {label}
    </button>
  );
}
