import React, { useState } from 'react';
import './styles.css';
import Select from 'react-select';
import { data } from '../../data';
import { ResultItem } from '../ResultItem';

const options = data
  .map((value) =>
    value.list.map((item) => ({ value: item, label: item, type: value.type })),
  )
  .flatMap((a) => a);

export const Search = ({ group }) => {
  const [result, setResult] = useState();

  const onChange = (option) => {
    setResult(option.type);
  };

  return (
    <>
      <section className="search__form">
        <div className="search__bar">
          <Select
            className="search__input"
            options={options}
            onChange={onChange}
          />

          {/*<img className="search__icon" src={lupa} alt="lupa" />*/}
        </div>
        <div className="search__result">
          <ResultItem type={result} group={group} />
        </div>
      </section>
    </>
  );
};
