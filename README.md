# Charm the Commuter — Forecast a City That Isn't

[![Charm the Commuter](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![Rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/arestafirman/charm-commuter-forecast/rank.svg)](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![Reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/arestafirman/charm-commuter-forecast/reward.svg)](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

A tiny TypeScript program that writes a single-line weather forecast for the imaginary city of Vostram to `/output/entry.txt`.

> Vostram: fog all morning, 14°C, visibility 30 metres; the 07:40 bus still finds your stop, guided by the smell of your coffee.

Why this entry: it reads like a real broadcast — city name, fog all morning, temperature, visibility in metres — then lands a concrete sensory punch in the second beat: the 07:40 bus still finds your stop, guided by the smell of your coffee. Two beats, setup then payoff, in 126 characters.

Run it with `node main.ts` (Node 22.18+ runs TypeScript directly). Set `OUTPUT_DIR` to override the default `/output` directory, e.g. `OUTPUT_DIR=/tmp/charm-test node main.ts`.
