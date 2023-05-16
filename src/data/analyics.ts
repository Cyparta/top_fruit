interface analyticsinterface {
  id: number;
  number: string;
  title: string;
  discount: string;
}

export const analyticsdata: analyticsinterface[] = [
  {
    id: 1,
    number: "46,827",
    title: "Orders",
    discount: "-0.91% this week",
  },
  {
    id: 2,
    number: "23,283.5",
    title: "net sales",
    discount: "+0.49% this week",
  },
  {
    id: 3,
    number: "23,658",
    title: "Sold items",
    discount: "+0.65% this week",
  },
];
