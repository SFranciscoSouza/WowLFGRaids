import { FC } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  Typography
} from '@mui/material';
import {
  RaidFilters,
  GameVersion,
  RaidDifficulty,
  Faction,
  Role,
  RETAIL_RAIDS,
  CLASSIC_RAIDS,
  RETAIL_DIFFICULTIES,
  CLASSIC_DIFFICULTIES,
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
      raidName: undefined,
      difficulty: undefined
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

  const handleRoleToggle = (role: Role) => {
    const currentRoles = filters.rolesNeeded || [];
    const newRoles = currentRoles.includes(role)
      ? currentRoles.filter((r) => r !== role)
      : [...currentRoles, role];

    onFilterChange({
      ...filters,
      rolesNeeded: newRoles.length > 0 ? newRoles : undefined
    });
  };

  const handleResetFilters = () => {
    onFilterChange({});
  };

  const getRaidOptions = () => {
    if (!filters.gameVersion) return [];

    if (filters.gameVersion === 'retail') {
      return [
        ...RETAIL_RAIDS.tww,
        ...RETAIL_RAIDS.df,
        ...RETAIL_RAIDS.sl
      ];
    }

    return [
      ...CLASSIC_RAIDS.wotlk,
      ...CLASSIC_RAIDS.tbc,
      ...CLASSIC_RAIDS.vanilla
    ];
  };

  const getDifficultyOptions = () => {
    if (!filters.gameVersion) return [];

    return filters.gameVersion === 'retail'
      ? RETAIL_DIFFICULTIES
      : CLASSIC_DIFFICULTIES;
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Filters
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
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

        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth size="small" disabled={!filters.gameVersion}>
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

        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth size="small" disabled={!filters.gameVersion}>
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

        <Grid item xs={12} sm={6} md={3}>
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

        <Grid item xs={12} sm={6} md={2}>
          <TextField
            fullWidth
            size="small"
            label="Min Price (Gold)"
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

        <Grid item xs={12} sm={6} md={2}>
          <TextField
            fullWidth
            size="small"
            label="Max Price (Gold)"
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

        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              Roles Needed:
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={filters.rolesNeeded?.includes('tank') || false}
                    onChange={() => handleRoleToggle('tank')}
                  />
                }
                label="Tank"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={filters.rolesNeeded?.includes('healer') || false}
                    onChange={() => handleRoleToggle('healer')}
                  />
                }
                label="Healer"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={filters.rolesNeeded?.includes('dps') || false}
                    onChange={() => handleRoleToggle('dps')}
                  />
                }
                label="DPS"
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Button variant="outlined" onClick={handleResetFilters} size="small">
            Reset Filters
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RaidsFiltersComponent;
