import React from 'react';

export default function SelectInput({ listData, onChange, customId }) {
    function selectInputHandler(e) {
      onChange(e);
    }

    return (
      <div className="select_input">
        <input type="text" list={customId} onChange={selectInputHandler}/>
        <datalist id={customId}>
          {listData.map((listOption, index) => {
              return <option key={listOption} value={listOption} />
          })}
        </datalist>
      </div>
    )
}
