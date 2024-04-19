import React from "react";
import ColourItem from "./ColourItem";

export default function ColourList({ coloursList }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Hex</th>
            <th>RGB</th>
            <th>HSL</th>
          </tr>
        </thead>
        <tbody>
          {coloursList.map((colour) => (
            <ColourItem key={colour.hex} colour={colour} />
          ))}
        </tbody>
      </table>
    </>
  );
}
