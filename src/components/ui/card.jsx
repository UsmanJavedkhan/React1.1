export default function Cards({concepts}) {
  let {id,title,content} = concepts;
  console.log(id);
  
  return (
    <div className="each_cards">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
