import React from "react";

const MedalList = ({ countries, setCountries }) => {
  const onDelete = (id) => {
    setCountries(countries.filter((country) => country.id !== id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>

      <tbody>
        {countries.map((country) => (
          <tr key={country.id}>
            <td>{country.name}</td>
            <td>{country.gold}</td>
            <td>{country.silver}</td>
            <td>{country.bronze}</td>
            <td>
              <button
                type="button"
                onClick={() => {
                  onDelete(country.id);
                }}
              >
                삭제
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MedalList;
