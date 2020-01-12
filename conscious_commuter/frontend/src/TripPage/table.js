import React from 'react';
import MaterialTable from 'material-table';

export default function Table() {
  const [state, setState] = React.useState({
    columns: [
      {title: 'Trip Name', field: 'name'},
      { title: 'Start Location', field: 'start' },
      { title: 'End Location', field: 'end' },
      { title: 'Distance Travelled (km)', field: 'distance', type: 'numeric' },
      {title: 'Transportation Method', field: 'vehicle'
      },
    ],
    data: [
      { name: 'Commute to UVic', start: 'uvic', end: 'ubc', distance: 23, vehicle: 'bike' },
    ],
  });

  return (
    <div style={{ maxWidth: "60%", align: "center" }}>
    <MaterialTable
      title="Trip History"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
    </div>
  );
}