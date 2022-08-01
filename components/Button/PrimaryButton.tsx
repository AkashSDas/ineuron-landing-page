export default function PrimaryButton({ label }) {
  return (
    <button className="h-[50px] text-white bg-violet px-[2rem] rounded-full hover:brightness-90">
      {label}
    </button>
  );
}
