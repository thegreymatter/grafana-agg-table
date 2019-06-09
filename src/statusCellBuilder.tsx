import { TableCellBuilder, TableCellBuilderOptions } from "@grafana/ui/components/Table/TableCellBuilder";
import React from "react";

/** Simplest cell that just spits out the value */
export const statusCellBuilder: TableCellBuilder = (cell: TableCellBuilderOptions) => {
    const { props, value, className } = cell;
    const { style } = props;
  
    const getTrend =function(element:any){
        if(!element.trend)
        return (<span></span>);
        else if (element.trend>0.1)
        return (<span>▲</span>);
        else if (element.trend<-0.1)
        return (<span>▼</span>);
        else
        return (<span>▶</span>);

    }
    const getColor =function(element:any){
        if(!element.color)
        return "black";
        else if (element.trend>0.1)
        return "green";
        else if (element.trend<-0.1)
        return "red";
        else
        return "lime";

    }


    return (
      <div style={{...style,padding:"10px"}} className={'gf-table-cell ' + className}>
       <span style={{color:getColor(value),fontWeight:"bold"}}>{value.value||"n\\a"}</span>{getTrend(value)}
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