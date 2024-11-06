import React from "react";
import { useState } from "react";

const MedalForm = ({ countries, setCountries }) => {
  const [input, setInput] = useState({
    name: "",
    gold: "",
    silver: "",
    bronze: "",
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onAddCountry = (e) => {
    e.preventDefault();
    if (input.name && input.gold && input.silver && input.bronze) {
      const exists = countries.some((country) => 
        country.name === input.name
    );
      if (exists) {
        return alert("이미 있는 국가입니다. 업데이트를 해주세요!");
      }

      setCountries([...countries, { ...input, id: Date.now() }]);
      setInput({ name: "", gold: "", silver: "", bronze: "" });
    } else {
      return alert("모두 입력해주셔야 국가가 추가가됩니다.");
    }
  };

  const onUpdate = (e) => {
    e.preventDefault();
    if (!input.name) {
      return alert("메달 수를 업데이트 할 국가를 입력해주세요");
    }

    const countryIndex = countries.findIndex((country) => 
      country.name === input.name
    );

    if (countryIndex === -1) {
      return alert("존재하지않는 국가입니다.");
    }

    const updatedCountries = [...countries];
    updatedCountries[countryIndex] = { ...updatedCountries[countryIndex],...input };
    setCountries(updatedCountries);
    setInput({ name: "", gold: "", silver: "", bronze: "" });
    alert("국가가 업데이트되었습니다.");
  };

  return (
    <form onSubmit={onAddCountry}>
      <div>
        <p>국가명</p>
        <input
          type="text"
          onChange={onChange}
          name="name"
          value={input.name}
          required
        />
      </div>

      <div>
        <p>금메달</p>
        <input
          type="number"
          onChange={onChange}
          name="gold"
          value={input.gold}
          required
        />
      </div>

      <div>
        <p>은메달</p>
        <input
          type="number"
          onChange={onChange}
          name="silver"
          value={input.silver}
          required
        />
      </div>

      <div>
        <p>동메달</p>
        <input
          type="number"
          onChange={onChange}
          name="bronze"
          value={input.bronze}
          required
        />
      </div>

      <div>
        <button type="submit">국가 추가</button>
        <button type="button" onClick={onUpdate}>
          업데이트
        </button>
      </div>
    </form>
  );
};

export default MedalForm;
