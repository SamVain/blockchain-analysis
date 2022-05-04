
import "ka-table/style.scss";
//import "../style.scss";

import React, { useState } from "react";

import FilterControl from 'react-filter-control';

import { kaReducer, Table } from "ka-table";
import { loadData, updateData } from "ka-table/actionCreators";
import { ActionType, DataType, SortingMode, PagingPosition } from "ka-table/enums";
import { filterData } from '../filterData';
import Container from 'react-bootstrap/Container'


const tablePropsInit = {
    columns: [
      { key: 'Hash', title: 'Hash', dataType: DataType.String, width: 100 },
      { key: 'DateTime', title: 'DateTime', dataType: DataType.String, width: 25  },
      { key: 'Btc', title: 'Btc', dataType: DataType.String, width: 25  },
      { key: 'ValueIn', title: 'ValueIn', dataType: DataType.String, width: 25  },
      { key: 'ValueOut', title: 'ValueOut', dataType: DataType.String, width: 25  },
      { key: 'ValueIn1', title: 'ValueIn1', dataType: DataType.Number, visible: false  },
      { key: 'ValueOut1', title: 'ValueOut1', dataType: DataType.Number, visible: false  },
      ],
      paging: {
        enabled: true,
        pageIndex: 0,
        pageSize: 10,
        pageSizes: [5, 10, 15],
        position: PagingPosition.Bottom
      },
      singleAction: loadData(),
      sortingMode: SortingMode.Single,
      rowKeyField: "Id"
    }; 

    const fields = [{

        caption: 'ValueIn1',
        name: 'ValueIn1',
        operators: [{
            caption: 'Equals',
            name: '=',
        }, {
            caption: 'Does not Equal',
            name: '<>',
        }, {
            caption: 'More than',
            name: '>',
        }, {
            caption: 'Less than',
            name: '<',
        }],
    }];
    
    const groups = [{
    
        caption: 'And',
        name: 'and',
    }, 
    {
        caption: 'Or',
        name: 'or',
    }];
    
    const filter = {
    
    groupName: 'and',
    items: [
        {
            field: 'ValueIn1',
            key: '1',
            operator: '>',
            value: '0',
        },
    ],
    };



function DataView() {

    const [tableProps, changeTableProps] = useState(tablePropsInit);

    const dispatch = async action => {
  
      changeTableProps(prevState => kaReducer(prevState, action));
  
      if (action.type === ActionType.LoadData) {

            await fetch('https://localhost:44334/api/bitcoin/getshortdata', {
                    method: 'GET',
                    headers: {},
                })
          .then(response => response.json())
          .then(data => dispatch(updateData(data)))            
          .catch(err => console.log("err:", err))
      } 
    };
  
    const [filterValue, changeFilter] = useState(filter);
    const onFilterChanged = (newFilterValue) => {
      changeFilter(newFilterValue);
    };

    return (
        <Container>

            <div class="container">
                <div className='top-element'>
                    <FilterControl {...{fields, groups, filterValue,  onFilterValueChanged: onFilterChanged}}/>
                </div>

                <div className="remote-data-demo">
                    <Table 
                    {...tableProps} 
                    dispatch={dispatch} 
                    extendedFilter={(data) => filterData(data, filterValue)}
                    />
                </div>
            </div>
        </Container>
    );
};

export default DataView;