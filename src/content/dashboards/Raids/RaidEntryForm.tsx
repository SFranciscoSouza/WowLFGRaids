import { FC, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Autocomplete,
  Checkbox,
  ListItemText,
  FormControlLabel,
  FormGroup
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
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
  getDifficultyLabel,
  getBossesForRaid
} from 'src/models/raid';

interface RaidEntryFormData {
  gameVersion: GameVersion | '';
  expansion: Expansion | '';
  raidName: string;
  difficulty: RaidDifficulty | '';
  price: number | '';
  faction: Faction | '';
  server: string;
  scheduledTime: Date | null;
  description?: string;
  note?: string;
  isFullClear: boolean;
  selectedBosses: string[];
}

interface RaidEntryFormProps {
  onSubmit: (data: RaidEntryFormData) => void;
  onCancel?: () => void;
}

const RaidEntryForm: FC<RaidEntryFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<RaidEntryFormData>({
    gameVersion: '',
    expansion: '',
    raidName: '',
    difficulty: '',
    price: '',
    faction: '',
    server: '',
    scheduledTime: null,
    description: '',
    note: '',
    isFullClear: true,
    selectedBosses: []
  });

  const handleGameVersionChange = (version: GameVersion | '') => {
    setFormData({
      ...formData,
      gameVersion: version,
      expansion: '',
      raidName: '',
      selectedBosses: [],
      isFullClear: true
    });
  };

  const handleExpansionChange = (expansion: Expansion | '') => {
    setFormData({
      ...formData,
      expansion: expansion,
      raidName: '',
      selectedBosses: [],
      isFullClear: true
    });
  };

  const handleRaidNameChange = (raidName: string) => {
    setFormData({
      ...formData,
      raidName,
      selectedBosses: [],
      isFullClear: true
    });
  };

  const handleFullClearToggle = (isFullClear: boolean) => {
    setFormData({
      ...formData,
      isFullClear,
      selectedBosses: isFullClear ? [] : formData.selectedBosses
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const availableExpansions =
    formData.gameVersion === 'retail'
      ? RETAIL_EXPANSIONS
      : formData.gameVersion === 'classic'
      ? CLASSIC_EXPANSIONS
      : [];

  const availableRaids =
    formData.gameVersion === 'retail' && formData.expansion
      ? RETAIL_RAIDS[formData.expansion as keyof typeof RETAIL_RAIDS] || []
      : formData.gameVersion === 'classic' && formData.expansion
      ? CLASSIC_RAIDS[formData.expansion as keyof typeof CLASSIC_RAIDS] || []
      : [];

  const availableDifficulties =
    formData.gameVersion === 'retail'
      ? RETAIL_DIFFICULTIES
      : formData.gameVersion === 'classic'
      ? CLASSIC_DIFFICULTIES
      : [];

  const availableBosses = formData.raidName
    ? getBossesForRaid(formData.raidName)
    : [];

  return (
    <Card>
      <CardContent>
        <Typography variant="h3" sx={{ mb: 3 }}>
          Create New Raid Listing
        </Typography>

        <form onSubmit={handleSubmit}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container spacing={2}>
              {/* Game Version */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>Game Version</InputLabel>
                  <Select
                    value={formData.gameVersion}
                    onChange={(e) =>
                      handleGameVersionChange(e.target.value as GameVersion)
                    }
                    label="Game Version"
                  >
                    <MenuItem value="retail">Retail</MenuItem>
                    <MenuItem value="classic">Classic</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Expansion */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required disabled={!formData.gameVersion}>
                  <InputLabel>Expansion</InputLabel>
                  <Select
                    value={formData.expansion}
                    onChange={(e) =>
                      handleExpansionChange(e.target.value as Expansion)
                    }
                    label="Expansion"
                  >
                    {availableExpansions.map((exp) => (
                      <MenuItem key={exp} value={exp}>
                        {EXPANSION_LABELS[exp]}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Raid Name */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required disabled={!formData.expansion}>
                  <InputLabel>Raid Name</InputLabel>
                  <Select
                    value={formData.raidName}
                    onChange={(e) => handleRaidNameChange(e.target.value)}
                    label="Raid Name"
                  >
                    {availableRaids.map((raid) => (
                      <MenuItem key={raid} value={raid}>
                        {raid}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Difficulty */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required disabled={!formData.gameVersion}>
                  <InputLabel>Difficulty</InputLabel>
                  <Select
                    value={formData.difficulty}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        difficulty: e.target.value as RaidDifficulty
                      })
                    }
                    label="Difficulty"
                  >
                    {availableDifficulties.map((diff) => (
                      <MenuItem key={diff} value={diff}>
                        {getDifficultyLabel(diff)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Price */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Price (Gold)"
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: e.target.value ? Number(e.target.value) : ''
                    })
                  }
                  inputProps={{ min: 0 }}
                />
              </Grid>

              {/* Faction */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>Faction</InputLabel>
                  <Select
                    value={formData.faction}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        faction: e.target.value as Faction
                      })
                    }
                    label="Faction"
                  >
                    <MenuItem value="alliance">Alliance</MenuItem>
                    <MenuItem value="horde">Horde</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Server */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Server"
                  value={formData.server}
                  onChange={(e) =>
                    setFormData({ ...formData, server: e.target.value })
                  }
                />
              </Grid>

              {/* Scheduled Time */}
              <Grid item xs={12} sm={6}>
                <DateTimePicker
                  label="Scheduled Time *"
                  value={formData.scheduledTime}
                  onChange={(newValue) =>
                    setFormData({ ...formData, scheduledTime: newValue as Date | null })
                  }
                  renderInput={(params) => (
                    <TextField {...params} fullWidth required />
                  )}
                />
              </Grid>

              {/* Boss Selection Section */}
              <Grid item xs={12}>
                <Typography variant="h5" sx={{ mb: 1, mt: 1 }}>
                  Boss Selection
                </Typography>
              </Grid>

              {/* Full Clear Checkbox */}
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.isFullClear}
                        onChange={(e) => handleFullClearToggle(e.target.checked)}
                        disabled={!formData.raidName}
                      />
                    }
                    label="Full Clear (All Bosses)"
                  />
                </FormGroup>
              </Grid>

              {/* Individual Boss Selection */}
              {formData.raidName && !formData.isFullClear && (
                <Grid item xs={12}>
                  <Autocomplete
                    multiple
                    options={availableBosses}
                    value={formData.selectedBosses}
                    onChange={(_, newValue) =>
                      setFormData({ ...formData, selectedBosses: newValue })
                    }
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Bosses"
                        placeholder="Choose bosses"
                      />
                    )}
                    renderOption={(props, option, { selected }) => (
                      <li {...props}>
                        <Checkbox checked={selected} />
                        <ListItemText primary={option} />
                      </li>
                    )}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                    {formData.selectedBosses.length > 0
                      ? `${formData.selectedBosses.length}/${availableBosses.length} bosses selected`
                      : 'Select at least one boss'}
                  </Typography>
                </Grid>
              )}

              {/* Description */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  multiline
                  rows={3}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </Grid>

              {/* Additional Notes */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Additional Notes"
                  multiline
                  rows={2}
                  value={formData.note}
                  onChange={(e) =>
                    setFormData({ ...formData, note: e.target.value })
                  }
                  placeholder="E.g., loot rules, requirements, etc."
                />
              </Grid>

              {/* Action Buttons */}
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                  {onCancel && (
                    <Button variant="outlined" onClick={onCancel}>
                      Cancel
                    </Button>
                  )}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={
                      !formData.gameVersion ||
                      !formData.expansion ||
                      !formData.raidName ||
                      !formData.difficulty ||
                      !formData.price ||
                      !formData.faction ||
                      !formData.server ||
                      !formData.scheduledTime ||
                      (!formData.isFullClear && formData.selectedBosses.length === 0)
                    }
                  >
                    Create Raid Listing
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </LocalizationProvider>
        </form>
      </CardContent>
    </Card>
  );
};

export default RaidEntryForm;
