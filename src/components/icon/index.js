import React from "react";
import {Company} from "./Company";
import {Location} from "./Location";
import {Moon} from "./Moon";
import {Search} from "./Search";
import { Sun } from "./Sun";
import { Twitter } from "./Twitter";
import { Website } from "./Website";

const Icon = (props) => {
  switch (props.name.toLowerCase()) {
    case "company":
      return <Company {...props} />;
    case "location":
      return <Location {...props} />;
    case "moon":
      return <Moon {...props} />;
    case "search":
      return <Search {...props} />;
    case "sun":
      return <Sun {...props} />;
    case "twitter":
      return <Twitter {...props} />;
    case "website":
      return <Website {...props} />;
  }
};

export { Icon };
