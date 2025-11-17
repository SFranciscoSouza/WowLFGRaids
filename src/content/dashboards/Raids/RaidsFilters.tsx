import { FC } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
  Typography,
  Chip
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  addDays,
  endOfDay,
  startOfDay,
  endOfWeek,
  isWeekend,
  nextSaturday
} from 'date-fns';
import {
  RaidFilters,
  GameVersion,
  RaidDifficulty,
  Faction,
  Expansion,
  RETAIL_RAIDS,
  CLASSIC_RAIDS,
  RETAIL_DIFFICULTIES,
  CLASSIC_DIFFICULTIES,
  RETAIL_EXPANSIONS,
  CLASSIC_EXPANSIONS,
  EXPANSION_LABELS,
  getDifficultyLabel
} from 'src/models/raid';

interface RaidsFiltersProps {
  filters: RaidFilters;
  onFilterChange: (filters: RaidFilters) => void;
}

const RaidsFiltersComponent: FC<RaidsFiltersProps> = ({
  filters,
  onFilterChange
}) => {
  const handleGameVersionChange = (version: GameVersion | '') => {
    onFilterChange({
      ...filters,
      gameVersion: version || undefined,
      expansion: undefined
    });
  };

  const handleExpansionChange = (expansion: Expansion | '') => {
    onFilterChange({
      ...filters,
      expansion: expansion || undefined,
      raidName: undefined
    });
  };

  const handleRaidNameChange = (name: string) => {
    onFilterChange({
      ...filters,
      raidName: name || undefined
    });
  };

  const handleDifficultyChange = (difficulty: RaidDifficulty | '') => {
    onFilterChange({
      ...filters,
      difficulty: difficulty || undefined
    });
  };

  const handleFactionChange = (faction: Faction | '') => {
    onFilterChange({
      ...filters,
      faction: faction || undefined
    });
  };

  const handleScheduledFromChange = (date: Date | null) => {
    onFilterChange({
      ...filters,
      scheduledFrom: date ? date.getTime() : undefined
    });
  };

  const handleScheduledToChange = (date: Date | null) => {
    onFilterChange({
      ...filters,
      scheduledTo: date ? date.getTime() : undefined
    });
  };

  const handleQuickFilter = (type: 'today' | 'week' | 'weekend') => {
    const now = new Date();
    let from: number;
    let to: number;

    switch (type) {
      case 'today':
        from = startOfDay(now).getTime();
        to = endOfDay(now).getTime();
        break;
      case 'week':
        from = now.getTime();
        to = endOfWeek(now, { weekStartsOn: 1 }).getTime();
        break;
      case 'weekend':
        const saturday = isWeekend(now) ? now : nextSaturday(now);
        from = startOfDay(saturday).getTime();
        to = endOfDay(addDays(saturday, 1)).getTime();
        break;
      default:
        return;
    }

    onFilterChange({
      ...filters,
      scheduledFrom: from,
      scheduledTo: to
    });
  };

  const handleResetFilters = () => {
    onFilterChange({});
  };

  const getExpansionOptions = (): Expansion[] => {
    if (filters.gameVersion === 'retail') {
      return RETAIL_EXPANSIONS;
    }

    if (filters.gameVersion === 'classic') {
      return CLASSIC_EXPANSIONS;
    }

    return [...RETAIL_EXPANSIONS, ...CLASSIC_EXPANSIONS];
  };

  const getRaidOptions = () => {
    if (filters.expansion) {
      if (RETAIL_EXPANSIONS.includes(filters.expansion as any)) {
        return RETAIL_RAIDS[filters.expansion as keyof typeof RETAIL_RAIDS];
      }
      if (CLASSIC_EXPANSIONS.includes(filters.expansion as any)) {
        return CLASSIC_RAIDS[filters.expansion as keyof typeof CLASSIC_RAIDS];
      }
    }

    if (filters.gameVersion === 'retail') {
      return [...RETAIL_RAIDS.tww, ...RETAIL_RAIDS.df, ...RETAIL_RAIDS.sl];
    }

    if (filters.gameVersion === 'classic') {
      return [
        ...CLASSIC_RAIDS.wotlk,
        ...CLASSIC_RAIDS.tbc,
        ...CLASSIC_RAIDS.vanilla
      ];
    }

    return [
      ...RETAIL_RAIDS.tww,
      ...RETAIL_RAIDS.df,
      ...RETAIL_RAIDS.sl,
      ...CLASSIC_RAIDS.wotlk,
      ...CLASSIC_RAIDS.tbc,
      ...CLASSIC_RAIDS.vanilla
    ];
  };

  const getDifficultyOptions = () => {
    if (filters.gameVersion === 'retail') {
      return RETAIL_DIFFICULTIES;
    }

    if (filters.gameVersion === 'classic') {
      return CLASSIC_DIFFICULTIES;
    }

    // Return unique difficulties when no version is selected
    return Array.from(new Set([...RETAIL_DIFFICULTIES, ...CLASSIC_DIFFICULTIES]));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Filters
        </Typography>

        {/* Date/Time Filters - MOST IMPORTANT */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Scheduled Time
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={3}>
              <DateTimePicker
                label="From"
                value={filters.scheduledFrom ? new Date(filters.scheduledFrom) : null}
                onChange={handleScheduledFromChange}
                renderInput={(params) => (
                  <TextField {...params} size="small" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DateTimePicker
                label="To"
                value={filters.scheduledTo ? new Date(filters.scheduledTo) : null}
                onChange={handleScheduledToChange}
                renderInput={(params) => (
                  <TextField {...params} size="small" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip
                  label="Today"
                  onClick={() => handleQuickFilter('today')}
                  color="primary"
                  variant="outlined"
                  clickable
                />
                <Chip
                  label="This Week"
                  onClick={() => handleQuickFilter('week')}
                  color="primary"
                  variant="outlined"
                  clickable
                />
                <Chip
                  label="This Weekend"
                  onClick={() => handleQuickFilter('weekend')}
                  color="primary"
                  variant="outlined"
                  clickable
                />
                {(filters.scheduledFrom || filters.scheduledTo) && (
                  <Chip
                    label="Clear Dates"
                    onClick={() =>
                      onFilterChange({
                        ...filters,
                        scheduledFrom: undefined,
                        scheduledTo: undefined
                      })
                    }
                    color="error"
                    variant="outlined"
                    clickable
                  />
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={2} alignItems="center">
          {/* First Row */}
          <Grid item xs={6} sm={4} md={2}>
            <FormControl fullWidth size="small">
              <InputLabel>Game Version</InputLabel>
              <Select
                value={filters.gameVersion || ''}
                onChange={(e) =>
                  handleGameVersionChange(e.target.value as GameVersion | '')
                }
                label="Game Version"
              >
                <MenuItem value="">All Versions</MenuItem>
                <MenuItem value="retail">Retail</MenuItem>
                <MenuItem value="classic">Classic</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <FormControl fullWidth size="small">
              <InputLabel>Expansion</InputLabel>
              <Select
                value={filters.expansion || ''}
                onChange={(e) =>
                  handleExpansionChange(e.target.value as Expansion | '')
                }
                label="Expansion"
              >
                <MenuItem value="">All Expansions</MenuItem>
                {getExpansionOptions().map((exp) => (
                  <MenuItem key={exp} value={exp}>
                    {EXPANSION_LABELS[exp]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <FormControl fullWidth size="small">
              <InputLabel>Raid</InputLabel>
              <Select
                value={filters.raidName || ''}
                onChange={(e) => handleRaidNameChange(e.target.value)}
                label="Raid"
              >
                <MenuItem value="">All Raids</MenuItem>
                {getRaidOptions().map((raid) => (
                  <MenuItem key={raid} value={raid}>
                    {raid}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <FormControl fullWidth size="small">
              <InputLabel>Difficulty</InputLabel>
              <Select
                value={filters.difficulty || ''}
                onChange={(e) =>
                  handleDifficultyChange(e.target.value as RaidDifficulty | '')
                }
                label="Difficulty"
              >
                <MenuItem value="">All Difficulties</MenuItem>
                {getDifficultyOptions().map((diff) => (
                  <MenuItem key={diff} value={diff}>
                    {getDifficultyLabel(diff)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <FormControl fullWidth size="small">
              <InputLabel>Faction</InputLabel>
              <Select
                value={filters.faction || ''}
                onChange={(e) =>
                  handleFactionChange(e.target.value as Faction | '')
                }
                label="Faction"
              >
                <MenuItem value="">Both Factions</MenuItem>
                <MenuItem value="alliance">Alliance</MenuItem>
                <MenuItem value="horde">Horde</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <FormControl fullWidth size="small">
              <InputLabel>Saved Status</InputLabel>
              <Select
                value={
                  filters.isSaved === undefined
                    ? ''
                    : filters.isSaved
                    ? 'saved'
                    : 'unsaved'
                }
                onChange={(e) => {
                  const value = e.target.value;
                  onFilterChange({
                    ...filters,
                    isSaved:
                      value === ''
                        ? undefined
                        : value === 'saved'
                        ? true
                        : false
                  });
                }}
                label="Saved Status"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="saved">Saved</MenuItem>
                <MenuItem value="unsaved">Unsaved</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Second Row */}
          <Grid item xs={6} sm={4} md={2}>
            <TextField
              fullWidth
              size="small"
              label="Min Price"
              type="number"
              value={filters.minPrice || ''}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  minPrice: e.target.value ? Number(e.target.value) : undefined
                })
              }
            />
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <TextField
              fullWidth
              size="small"
              label="Max Price"
              type="number"
              value={filters.maxPrice || ''}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  maxPrice: e.target.value ? Number(e.target.value) : undefined
                })
              }
            />
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <Button
              variant="outlined"
              onClick={handleResetFilters}
              size="small"
              fullWidth
              color="error"
            >
              Reset All
            </Button>
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};

export default RaidsFiltersComponent;
