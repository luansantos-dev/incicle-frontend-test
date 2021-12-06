import React from "react";
import Title from "../Components/Typography/Title";
import style from "../Components/Content.module.css";
import Select from "../Components/Form/Select";
import Button from "../Components/Form/Button";
import btnImg from "../Assets/btn.png";

const Content = () => {
  const [type, setType] = React.useState("");
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    let url = `http://localhost:3000/data?`;
    if (type !== "") url += `type=${type}`;

    async function fetchData() {
      try {
        setLoading(true);
        setData([]);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (erro) {
        return erro;
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [type]);

  if (loading)
    return (
      <p style={{ fontSize: "20px", textAlign: "center" }}>Carregando...</p>
    );

    
  if (data === null) return null;  

  return (
    <section>
      <div className={style.contentTitle}>
        <Title title="Endomarketing" />
        <ul>
          <li>
            <Select
              options={["release", "event"]}
              value={type}
              setValue={setType}
            />
          </li>
          <li>
            <Button criar={"criar"} />
          </li>
        </ul>
      </div>

      <div className={style.CardBox}>
        {data.map((item, index) => (          
          <article key={index} className={style.Card}>
            <img src={item.files[0].file} alt={item.title} />
            <div>
              <h2 style={{color: "#707070"}}>{item.title}</h2>
              <div>
                <span className={style.Type} style={!(item.type === "release") ? {background: "#EE8686"} : {background: "#3489B1"}}>
                  {item.type}                              
                </span>
                {!(item.common.invited_people === undefined) ? <span className={style.Date}>{item.common.invited_people[0].name}</span> : ""}                
                <span className={style.Date}>{item.date}</span>              
                {!(item.common.invited_people === undefined) ? <span className={style.Date}>3 confirmações de 15</span> : ""}              

              </div>
              <p>{item.description}</p>
            </div>
            <div className={style.btn}>
              <img src={btnImg} alt="Imagem"></img>
            </div>
          </article>
          
        ))}
        
        
      </div>
    </section>
  );
};

export default Content;
