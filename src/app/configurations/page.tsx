'use client'
import React, { useEffect }  from "react";
import PeopleDataTable, { ConfigDataTable } from "./data-table";
import { columns } from "./columns";
// import { people } from "@/people";
import {data } from '../../config'
import { flattenConfig } from "@/lib/utils";


export const flattenedData = flattenConfig(data);
// console.log('flattened-data',flattenedData);

type Props = {};

const ConfigurationComponent = (props: Props) => {

  return (
    <div className="container py-10 mx-auto">
      <ConfigDataTable columns={columns} data={flattenedData} />
    </div>
  );
};

export default ConfigurationComponent;
