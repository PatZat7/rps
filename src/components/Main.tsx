import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Card,
  Stack,
  Paper,
} from "@mui/material";
import type { Player } from "./Player";
import { Player as PlayerStats, getRandomWeapon } from "./Player";

type Round = [string, Player, Player, string, string];

const StockpileRochambeau = () => {
  let [attacker, setAttacker] = useState<Player>({
    rocks: 5,
    papers: 5,
    scissors: 5,
    nextMove: "rock",
  });
  let [defender, setDefender] = useState<Player>({
    rocks: 5,
    papers: 5,
    scissors: 5,
  });
  let [rounds, setRounds] = useState<Round[]>([]);
  let [result, setResult] = useState<string>("");

  const updatePlayer = (player_type: string, player: Player) => {
    if (player_type === "attacker") {
      setAttacker(player);
    } else if (player_type === "defender") {
      setDefender(player);
    } else {
      throw new Error("Unknown player type");
    }
  };

  const shoot = (
    attacker: Player,
    defender: Player
  ): [Player, string, string, string] => {
    let attacker_weapon = attacker.nextMove;
    let defender_weapon = getRandomWeapon(defender);

    if (
      (attacker_weapon === "rock" && defender_weapon === "scissors") ||
      (attacker_weapon === "paper" && defender_weapon === "rock") ||
      (attacker_weapon === "scissors" && defender_weapon === "paper")
    ) {
      if (defender_weapon === "rock") {
        defender.rocks = defender.rocks - 1;
      }
      if (defender_weapon === "scissors") {
        defender.scissors = defender.scissors - 1;
      }
      if (defender_weapon === "paper") {
        defender.papers = defender.papers - 1;
      }
      return [attacker, "attacker", attacker_weapon, defender_weapon];
    } else {
      if (attacker_weapon === "rock") {
        attacker.rocks = attacker.rocks - 1;
      }
      if (attacker_weapon === "scissors") {
        attacker.scissors = attacker.scissors - 1;
      }
      if (attacker_weapon === "paper") {
        attacker.papers = attacker.papers - 1;
      }
      return [defender, "defender", attacker_weapon!, defender_weapon];
    }
  };

  const handleClick = () => {
    let result = shoot(attacker, defender);
    let winner = result[0];
    let attackerOrDefender = result[1];
    if (attackerOrDefender === "attacker") {
      setRounds([
        ...rounds,
        ["attacker", winner, defender, result[2], result[3]],
      ]);
      setAttacker(winner);
      if (
        defender.rocks === 0 &&
        defender.papers === 0 &&
        defender.scissors === 0
      ) {
        setResult("YOU WIN!!!");
      }
    } else {
      setRounds([
        ...rounds,
        ["defender", attacker, winner, result[2], result[3]],
      ]);
      setDefender(winner);
      if (
        attacker.rocks === 0 &&
        attacker.papers === 0 &&
        attacker.scissors === 0
      ) {
        setResult("YOU LOSE :(");
      }
    }
  };

  let roundsComponents = [];
  for (let i = 0; i < rounds.length; i++) {
    const roundsComponent = (
      <Paper
        elevation={3}
        key={i}
        sx={{
          "@keyframes slide-in-blurred-right": {
            "0%": {
              transform: "translateX(1000px) scaleX(2.5) scaleY(0.2)",
              transformOrigin: "0% 50%",
              filter: "blur(40px)",
              opacity: "0",
            },
            "100%": {
              transform: " translateX(0) scaleY(1) scaleX(1)",
              transformOrigin: "50% 50%",
              filter: "blur(0)",
              opacity: "1",
            },
          },
          animation:
            "slide-in-blurred-right 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
          padding: "1rem",
          minWidth: "250px",
        }}
      >
        <Box>
          you threw <b>{rounds[i][3]}</b>:
          <Box
            sx={{
              fontWeight: "200",
              fontSize: "1rem",
            }}
          >
            rocks: {rounds[i][1]?.rocks}&nbsp; papers: {rounds[i][1].papers}
            &nbsp; scissors: {rounds[i][1]?.scissors}&nbsp;
          </Box>
        </Box>
        <br />
        <Box>
          defender threw <b>{rounds[i][4]}</b>:
          <Box
            sx={{
              fontWeight: "200",
              fontSize: "1rem",
            }}
          >
            rocks: {rounds[i][2]?.rocks}&nbsp; papers: {rounds[i][2]?.papers}
            &nbsp; scissors: {rounds[i][2]?.scissors}&nbsp;
          </Box>
        </Box>
        <br />
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: "1.5rem",
          }}
        >
          {rounds[i][0] === "attacker" ? "you" : "defender"} won!
        </Typography>
      </Paper>
    );
    roundsComponents.push(roundsComponent);
  }

  const handleReset = () => {
    // Reset the state to initial values
    setAttacker({ rocks: 5, papers: 5, scissors: 5, nextMove: "rock" });
    setDefender({ rocks: 5, papers: 5, scissors: 5 });
    setRounds([]);
    setResult("");
  };

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Roboto Flex",
      }}
    >
      <p>
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: "3rem",
            marginBottom: "5rem",
          }}
        >
          Let's play Stockpile Rochambeau!
        </Typography>
      </p>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "2rem",
        }}
      >
        <Box
          padding="1rem"
          sx={{
            width: "100vw",
            display: "flex",
            justifyContent: "space-around",
            fontFamily: "Roboto Flex",
          }}
        >
          <Card sx={{ minWidth: 275, padding: "2rem" }}>
            <Typography
              sx={{
                fontWeight: "900",
                fontSize: "2rem",
              }}
            >
              You:
            </Typography>
            <PlayerStats
              player={attacker}
              setPlayer={(player: Player) => updatePlayer("attacker", player)}
            />
          </Card>

          <div>
            <Box>
              <FormControl>
                <FormLabel id="next_mov">Next Move</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="next_move_radio-buttons"
                  name="next_move-radio-buttons-group"
                  value={attacker.nextMove}
                  onChange={(e) => {
                    setAttacker((prevAttacker) => ({
                      ...prevAttacker,
                      nextMove: e.target.value,
                    }));
                  }}
                >
                  <FormControlLabel
                    value="rock"
                    control={<Radio />}
                    label="Rock"
                  />
                  <FormControlLabel
                    value="paper"
                    control={<Radio />}
                    label="Paper"
                  />
                  <FormControlLabel
                    value="scissors"
                    control={<Radio />}
                    label="Scissors"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "Roboto Flex",
              }}
            >
              <Button
                onClick={handleClick}
                color="primary"
                variant="contained"
                sx={{ padding: "3px 8px", marginTop: "10px" }}
              >
                Shoot {attacker.nextMove}!
              </Button>

              <Button
                onClick={handleReset}
                color="primary"
                variant="contained"
                sx={{
                  padding: "3px 8px",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
              >
                Reset Game
              </Button>
            </Box>
          </div>

          <Card sx={{ minWidth: 275, padding: "2rem" }}>
            <Typography
              sx={{
                fontWeight: "900",
                fontSize: "2rem",
              }}
            >
              Defender:
            </Typography>
            <PlayerStats
              player={defender}
              setPlayer={(player: Player) => updatePlayer("defender", player)}
            />
          </Card>
        </Box>
        <hr />
        <Box>
          {result}
          <br />

          <Box sx={{ marginTop: "4rem" }} pt={2}>
            <Typography
              sx={{
                fontWeight: "900",
                fontSize: "2rem",
                padding: "2rem",
              }}
            >
              Result:
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                overflowX: "scroll",
                width: "80vw",
                padding: "2rem",
              }}
            >
              {roundsComponents}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StockpileRochambeau;
