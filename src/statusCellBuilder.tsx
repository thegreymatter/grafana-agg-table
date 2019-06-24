import { TableCellBuilder, TableCellBuilderOptions } from "@grafana/ui/components/Table/TableCellBuilder";
import React from "react";
import numeral from "numeral";

/** Simplest cell that just spits out the value */
export const statusCellBuilder: TableCellBuilder = (cell: TableCellBuilderOptions)  => {
    const { props, value, className, column } = cell;
    const { style } = props;
        
    const getTrend =function(element:any){
      if(element.trend===undefined||element.trend===null)
         return (<span></span>);
        else if (element.trend>0.1)
        return (<span>▲</span>);
        else if (element.trend<-0.1)
        return (<span>▼</span>);
        else
        return (<span>▶</span>);

    }
    const getColor =function(element:any){
      if(element.color===undefined||element.color===null)
        return "black";
        else if (element.color>0.7)
        return "green";
        else if (element.color<0.4)
        return "red";
        else
        return "orange";

    }

    const getBgColor =function(element:any){
      if(element.color===undefined||element.color===null)
      return "";
      else if (element.color>0.7)
      return "#d2f8d2";
      else if (element.color<0.4)
      return "pink";
      else
      return "#FFEDCC";

  }
    const formatDict = {
      fid:'0%',
      fcp:'0%',
      commission:'$0.00',
      stability:'0%',
      traffic:'0 a',
    }
    const getValue = function(value){ //get coulmn type, and apply correct format.  
    let formatRule = formatDict[column.name.toLowerCase()];
    // console.log({'formatRule':formatRule, 'name': column.name});
    // TODO:
    // add solution for when swiching order. 
      if(value.value===undefined)
        return "n/a";      
      return numeral(value.value).format(formatRule);
    }

    return (
      <div style={{...style,padding:"10px",background:getBgColor(value)}} className={'gf-table-cell ' + className}>
       <span style={{color:getColor(value),fontWeight:"bold"}}>{getValue(value)}</span>     {getTrend(value)}
      </div>
    );
  };

  export const rowCellBuilder: TableCellBuilder = (cell: TableCellBuilderOptions) => {
    const { value, className } = cell;
  

    return (

      <div style={{fontWeight:"bold",padding:"10px"}} className={'gf-table-cell ' + className}>
      {value||"n\\a"}
      </div>
    );
  };