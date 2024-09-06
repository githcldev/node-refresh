import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { OrgChart } from '../lib/pages/prac/org-chart/index';
import { OrgTree } from '../lib/pages/prac/org-tree/index';
import { Dashboard } from '../lib/infra/components/Dashboard';
import { DataDemo } from '../lib/infra/components/DataDemo';
import { MenusDemo } from '../lib/infra/components/MenusDemo';
import { MessagesDemo } from '../lib/infra/components/MessagesDemo';
import { ChartsDemo } from '../lib/infra/components/ChartsDemo';
import { MiscDemo } from '../lib/infra/components/MiscDemo';
import { EmptyPage } from '../lib/infra/components/EmptyPage';
import { Documentation } from "../lib/infra/components/Documentation";
export class AppRoutes extends Component {
  render() {
    return (
      <div className="layout-main">
        <Route path="/" exact component={OrgTree} />
        <Route path="/org-chart" component={OrgChart} />
        <Route path="/org-tree" component={OrgTree} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/data" component={DataDemo} />
        <Route path="/menus" component={MenusDemo} />
        <Route path="/messages" component={MessagesDemo} />
        <Route path="/charts" component={ChartsDemo} />
        <Route path="/misc" component={MiscDemo} />
        <Route path="/empty" component={EmptyPage} />
        <Route path="/documentation" component={Documentation} />
      </div>
    );
  }
}