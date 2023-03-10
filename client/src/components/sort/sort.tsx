interface Props {
  handleChange: (inputValue: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Sort({ handleChange }: Props) {
  const sortByOptions = [
    {
      name: 'relevance',
    },
    {
      name: 'published',
    },
  ];
  return (
    <div className="m-2 items-start py-2 px-4">
      <p>Sort</p>
      <div className="flex items-center justify-center gap-2">
        {sortByOptions.map((option, index) => (
          <div key={index} className="flex items-center ">
            <input
              className="accent-[#2f2f2f]"
              type="radio"
              name="sortBy"
              value={option.name}
              defaultChecked={option.name === 'relevance'}
              onChange={handleChange}
            />
            <p>{option.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
