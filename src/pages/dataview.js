
import "ka-table/style.scss";
import "../pages/dataview.css";

import React, { useState } from "react";

import FilterControl from 'react-filter-control';

import { kaReducer, Table } from "ka-table";
import { loadData, updateData } from "ka-table/actionCreators";
import { ActionType, DataType, SortingMode, PagingPosition } from "ka-table/enums";
import { filterData } from '../filterData';
import Container from 'react-bootstrap/Container'

const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

function LinkFormatter(value) {

    var href = "https://www.blockchain.com/btc/tx/" + value

    return (
        
        <a className="hash" href={href} target="_blank" rel="noreferrer">{value}</a>
    )
}

const tablePropsInit = {
    columns: [
      { key: 'hash', title: 'Hash', dataType: DataType.String, width: 100 },
      { key: 'datetime', title: 'Date & Time', dataType: DataType.String, width: 35  },
      { key: 'btc', title: 'Bitcoin Price (USD)', dataType: DataType.String, width: 25  },
      { key: 'bitcoin', title: 'Bitcoin(s) Out', dataType: DataType.Number, width: 25  },
      { key: 'usd', title: 'Bitcoin(s) Out Value (USD)', dataType: DataType.Number, width: 25  },

      ],
      format: ({ column, value }) => {
        if (column.key === 'usd'){
          return formatter.format(value);
        }
        if (column.key === 'btc'){
            return formatter.format(value);
        }
        if (column.key === 'hash'){
            return LinkFormatter(value);
        }
      },
      paging: {
        enabled: true,
        pageIndex: 0,
        pageSize: 10,
        pageSizes: [5, 10, 15],
        position: PagingPosition.Bottom
      },
      singleAction: loadData(),
      sortingMode: SortingMode.Single,
      rowKeyField: "id"
    }; 

    const fields = [{

        caption: 'Bitcoin',
        name: 'bitcoin',
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
            field: 'bitcoin',
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

            await fetch('https://localhost:44388/api/mongodb/getshortdata', {
                    method: 'GET',
                    headers: {},
                })
          .then(response => response.json())
          .then(data => {

            dispatch(updateData(data));

          })            
          .catch(err => {
              
            console.log("err:", err);

          })
        } 
    };
  
    const [filterValue, changeFilter] = useState(filter);
    const onFilterChanged = (newFilterValue) => {
      changeFilter(newFilterValue);
    };

    return (
        <Container>
            <div style={Header}>Captured Data</div>
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

const Header = {
    padding: "10px 5px",
    textAlign: "left",
    color: "black",
    fontSize: "22px"
   }


export default DataView;