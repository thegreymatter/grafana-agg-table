//// Libraries
import _ from 'lodash';
import React, { PureComponent } from 'react';


export interface Options {
    value: string;
    rows: string;
    columns: string;
    threshold: string;
    thresholds:any;
  }

// Types
import { PanelEditorProps } from '@grafana/ui';
import {  FormField } from '@grafana/ui';

export class ATBEditor extends PureComponent<PanelEditorProps<Options>> {


  render() {
    const { rows, columns,value, threshold } = this.props.options;
    return (
      <div>

          <div className="section gf-form-group">
          <h5 className="section-heading">Display</h5>
       
          <FormField
            label="Columns-test1"
            labelWidth={8}
            inputWidth={12}
            value={columns}
          />
                    <FormField
            label="Rows"
            labelWidth={8}
            inputWidth={12}
            value={rows}
          />
                    <FormField
            label="Value"
            labelWidth={8}
            inputWidth={12}
            value={value}
          />
                              <FormField
            label="Threshold"
            labelWidth={8}
            inputWidth={12}
            value={threshold}
          />
        </div>
      </div>
    );
  }
}
