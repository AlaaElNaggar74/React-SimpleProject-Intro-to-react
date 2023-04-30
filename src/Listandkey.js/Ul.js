const Ul = () => {
  let x = 0;
  let skills = ["HTML", "CSS", "JS", "REACT", "ALOLLOA"];
  let skillsmap = skills.map((ele) => {
    return <li key={x++}>{ele}</li>;
  });
  return (
    <>
      <ul>{skillsmap}</ul>
    </>
  );
};

export default Ul;
