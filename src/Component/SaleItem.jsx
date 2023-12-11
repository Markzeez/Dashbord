import React, { useState } from "react";
import {
  BadgeDelta,
  Button,
  Flex,
  TabGroup,
  DonutChart,
  Metric,
  Card,
  Tab,
  TabList,
  Bold,
  Divider,
  List,
  ListItem,
  Text,
  Title,
} from "@tremor/react";
import { BiCaretRight, BiCaretLeft } from "react-icons/bi";
import {  CiViewList} from "react-icons/ci"
import { HiChartPie } from "react-icons/hi";

const stocks = [
  {
    name: "Logibling Inc.",
    value: 4326,
    performance: "8.3%",
    deltaType: "moderateIncrease",
  },
  {
    name: "Acme.",
    value: 2326,
    performance: "2.3%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Ayo and Fola.",
    value: 2656,
    performance: "5.3%",
    deltaType: "moderateIncrease",
  },
  {
    name: "Obiamaka.",
    value: 4667,
    performance: "0.3%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Match Group.",
    value: 1432,
    performance: "3.3%",
    deltaType: "moderateIncrease",
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const SaleItem = () => {
  const [selectedIndex, setSelectIndex] = useState(0);
  return (
    <Card className="max-w-full mx-auto  ">
      <Flex className="space-x-8 flex-col lg:flex-row ">
        <Title>Overview</Title>
        <TabGroup index={selectedIndex} onIndexChange={setSelectIndex}>
          <TabList variant="solid">
          <Tab icon={HiChartPie}>Chart</Tab>
          <Tab icon={CiViewList}>LIst</Tab>
          </TabList>
        </TabGroup>
      </Flex>
      <Text className="mt-8">Portfolio Value</Text>
      <Metric>$25,465 </Metric>
      <Divider/>
      <Text className="mt-8">
        <Bold>Asset Allocation</Bold>
      </Text>
     <Text>1 Assset class - 5 Holdings</Text>
     {selectedIndex === 0 ? (<DonutChart data={stocks} valueFormatter={dataFormatter} showAnimation={false} category="value" index="name" className="mt-6"/>) : (
      <>
      <Flex className="mt-8" justifyContent='between'>
      <Text className="truncate">
        <Bold>Stocks</Bold>
      </Text>
      <Text>Since transaction</Text>
      </Flex>
      <List className="mt-4">
      {stocks.map((stock) =>(
        <ListItem key={stock.name}>
          <Text>{stocks.name}</Text>
          <Flex className="space-x-2" justifyContent="end">
            <Text>
              ${Intl.NumberFormat('us').format(stock.value).toString()}
            </Text>
          </Flex>
        </ListItem>
      ))}
      </List>
      </>
     ) }
     <Flex className="mt-6 pt-4 border-t">
      <Button size="xs" variant="light" icon={BiCaretRight} iconPosition="right">View more </Button>
     </Flex>
    </Card>
  ); 
};

export default SaleItem;
