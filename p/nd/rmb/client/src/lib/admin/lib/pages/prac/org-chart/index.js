import React, { Component } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
export class OrgChart extends Component {
  constructor() {
    super();
    this.state = {
      organizationChartValue: [{
        label: 'F.C Barcelona',
        expanded: true,
        children: [
          {
            label: 'F.C Barcelona',
            expanded: true,
            children: [
              {
                label: 'Chelsea FC',
                expanded: true,
                children: [
                  {
                    label: 'F.C Barcelona',
                    expanded: true,
                    children: [
                      {
                        label: 'Chelsea FC'
                      },
                      {
                        label: 'F.C. Barcelona'
                      }
                    ]
                  },
                  {
                    label: 'Real Madrid',
                    expanded: true,
                    children: [
                      {
                        label: 'Bayern Munich'
                      },
                      {
                        label: 'Real Madrid'
                      }
                    ]
                  }
                ]
              },
              {
                label: 'F.C. Barcelona',
                expanded: true,
        children: [
          {
            label: 'F.C Barcelona',
            expanded: true,
            children: [
              {
                label: 'Chelsea FC'
              },
              {
                label: 'F.C. Barcelona'
              }
            ]
          },
          {
            label: 'Real Madrid',
            expanded: true,
            children: [
              {
                label: 'Bayern Munich'
              },
              {
                label: 'Real Madrid'
              }
            ]
          }
        ]
              }
            ]
          },
          {
            label: 'Real Madrid',
            expanded: true,
            children: [
              {
                label: 'Bayern Munich',
                expanded: true,
        children: [
          {
            label: 'F.C Barcelona',
            expanded: true,
            children: [
              {
                label: 'Chelsea FC'
              },
              {
                label: 'F.C. Barcelona'
              }
            ]
          },
          {
            label: 'Real Madrid',
            expanded: true,
            children: [
              {
                label: 'Bayern Munich'
              },
              {
                label: 'Real Madrid'
              }
            ]
          }
        ]
              },
              {
                label: 'Real Madrid',
                expanded: true,
        children: [
          {
            label: 'F.C Barcelona',
            expanded: true,
            children: [
              {
                label: 'Chelsea FC'
              },
              {
                label: 'F.C. Barcelona'
              }
            ]
          },
          {
            label: 'Real Madrid',
            expanded: true,
            children: [
              {
                label: 'Bayern Munich'
              },
              {
                label: 'Real Madrid'
              }
            ]
          }
        ]
              }
            ]
          }
        ]
      }]
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1>Organization Chart</h1>
            <OrganizationChart value={this.state.organizationChartValue} />
          </div>
        </div>
      </div>
    );
  }
}