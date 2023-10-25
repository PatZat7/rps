import React, { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";

export interface Player {
  rocks: number;
  papers: number;
  scissors: number;
  nextMove?: string | null;
}

export function getRandomWeapon(player: Player): string {
  if (player.rocks >= 0 && Math.random() <= 0.333) {
    return "rock";
  }
  if (player.papers >= 0 && Math.random() <= 0.333) {
    return "paper";
  }
  return "scissors";
}

export function Player(props: any) {
  const [player, set_player] = useState(props.player);

  useEffect(() => {
    props.setPlayer(player);
  }, [player.rocks, player.papers, player.scissors]);

  const addPaper = () =>
    set_player(Object.assign(player, { papers: player.papers + 1 }));
  const addRock = () =>
    set_player(Object.assign(player, { rocks: player.rocks + 1 }));
  const addScissor = () =>
    set_player(Object.assign(player, { scissors: player.scissors + 1 }));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "flex-start",
        fontWeight: "700",
        fontSize: "1.5rem",
      }}
    >
      <Box margin="1rem 0">
        rocks: {player.rocks}
        <Button onClick={addRock}>Add</Button>
      </Box>
      <Box margin="1rem 0">
        papers: {player.papers}
        <Button onClick={addPaper}>Add</Button>
      </Box>
      <Box margin="1rem 0">
        scissors: {props.player.papers}
        <Button onClick={addScissor}>Add</Button>
      </Box>
    </Box>
  );
}
