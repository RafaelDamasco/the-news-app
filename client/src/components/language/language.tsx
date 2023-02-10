interface Props {
  handleChange: (inputValue: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Language({ handleChange }: Props) {
  const lang = [
    {
      name: 'pt',
    },
    {
      name: 'en',
    },
    {
      name: 'de',
    },
  ];

  return (
    <div className="m-2 items-start py-2 px-4 ">
      <h1>Filter by Language</h1>
      <div className="flex flex-row flex-wrap">
        {lang.map((l, index) => (
          <div key={index} className="min-w-[90px] flex items-center my-1 mx-0">
            <input
              className="accent-[#2f2f2f]"
              type="radio"
              name="lang"
              value={l.name}
              defaultChecked={l.name === 'en'}
              onChange={handleChange}
            />
            <p className="m-0 ml-1">{l.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
