/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import solution from "!raw-loader!./central_solution.ligo";
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import central_types from "!raw-loader!./central_types.ligo";
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import exercise from "!raw-loader!./central.ligo";
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import course from "!raw-loader!./course.md";
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import squadron_types from "!raw-loader!./squadron_types.ligo";
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import squadron from "!raw-loader!./squadron.ligo";

export const data = { course, exercise, solution, supports: {squadron, squadron_types, central_types} };