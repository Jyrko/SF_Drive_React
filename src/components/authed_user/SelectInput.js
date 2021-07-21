import React from 'react';

export default function SelectInput({ listData, onChange, customId }) {
    function selectInputHandler(e) {
      onChange(e);
    }

    return (
      <div className="select_input">
        <input id={customId} type="text" list="list" onChange={selectInputHandler}/>
        <datalist id="list">
          {listData.map((listOption, index) => {
              return <option key={listOption} value={listOption} />
          })}
        </datalist>
        </div>
    )
}
