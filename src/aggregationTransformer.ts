import _ from "underscore";

export function transform(rows: Array<Array<any>>, fields:Array<any>) {
     let xfield_location = 1;
     let yfield_location = 2;
     let valfield_location = 3;
     let possibleRows = _.uniq(rows.map(x => x[xfield_location]));
     let PossibleColumns = _.uniq(rows.map(x => x[yfield_location]));
     let newRows =  possibleRows.map(row => {
          let newRow = PossibleColumns.map(col => {
               let items = rows.filter(f => f[xfield_location] == row && f[yfield_location] == col)
               if (items.length == 0)
                    return "";
               else
                    return items[0][valfield_location];
          });
          newRow.unshift(row);
          return newRow;
     });
     let newFields =  PossibleColumns.map(x=> {return {"name":x,"type":"string"}});
     newFields.unshift({"name":"","type":"string"})
     return {rows:newRows,fields:newFields}
};    
