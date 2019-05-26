//// Libraries
import _ from 'lodash';
import React, { PureComponent } from 'react';

export interface Options {
    value: string;
    rows: string;
    columns: string;
    threshold: string;
    thresholds: any;
}

export const defaults: Options = {
    value: '3',
    rows: '2',
    columns: '1',
    threshold: '',
    thresholds: ''
}
// Types 

import { PanelEditorProps } from '@grafana/ui';
import { FormField } from '@grafana/ui';

export class ATBEditor extends PureComponent <PanelEditorProps<Options>> {
      
    onColumnsChange = ({ target }) => {        
        this.props.options['columns'] =  target.value;
        this.props.onOptionsChange({ ...this.props.options, columns: target.value });
    };
    onRowsChange = ({ target }) => {        
        this.props.options['rows'] =  target.value;
        this.props.onOptionsChange({ ...this.props.options, rows: target.value });
    };
    onValueChange = ({ target }) => {        
        this.props.options['value'] =  target.value;
        this.props.onOptionsChange({ ...this.props.options, value: target.value });
    };
    onThresholdChange = ({ target }) => {        
        this.props.options['threshold'] =  target.value;
        this.props.onOptionsChange({ ...this.props.options, threshold: target.value });
    };
    render() {
        const { rows, columns, value, threshold } = this.props.options;
        return (
            <div>

          <div className="section gf-form-group">
          <h5 className="section-heading">Display</h5>
       
          <FormField
            label="Columns"
            labelWidth={8}
            inputWidth={12}
            value={columns}
            onChange={this.onColumnsChange}                   
          />
          <FormField
            label="Rows"
            labelWidth={8}
            inputWidth={12}
            value={rows}
            onChange={this.onRowsChange}
          />
          <FormField
            label="Value"
            labelWidth={8}
            inputWidth={12}
            value={value}
            onChange={this.onValueChange}
          />
          <FormField
            label="Threshold"
            labelWidth={8}
            inputWidth={12}
            value={threshold}
            onChange={this.onThresholdChange}
          />
        </div>
      </div>
        );
    }
}