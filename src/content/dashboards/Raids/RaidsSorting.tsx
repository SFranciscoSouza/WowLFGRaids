import { FC, useRef, useState } from 'react';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import { SortOption } from 'src/models/raid';

export type ViewMode = 'list' | 'grid';

interface RaidsSortingProps {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'scheduled_asc', label: 'Soonest First' },
  { value: 'scheduled_desc', label: 'Latest First' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'posted_desc', label: 'Newest Posted' },
  { value: 'posted_asc', label: 'Oldest Posted' }
];

const RaidsSorting: FC<RaidsSortingProps> = ({
  sortOption,
  onSortChange,
  viewMode,
  onViewModeChange
}) => {
  const actionRef = useRef<HTMLButtonElement | null>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const currentLabel =
    sortOptions.find((opt) => opt.value === sortOption)?.label ||
    'Soonest First';

  const handleViewModeChange = (
    _event: React.MouseEvent<HTMLElement>,
    newMode: ViewMode | null
  ) => {
    if (newMode !== null) {
      onViewModeChange(newMode);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 2
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ mr: 1 }}>
          Sort by:
        </Typography>
        <Button
          size="small"
          variant="outlined"
          ref={actionRef}
          onClick={() => setOpenMenu(true)}
          endIcon={<ExpandMoreTwoToneIcon />}
        >
          {currentLabel}
        </Button>
        <Menu
          disableScrollLock
          anchorEl={actionRef.current}
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          {sortOptions.map((option) => (
            <MenuItem
              key={option.value}
              onClick={() => {
                onSortChange(option.value);
                setOpenMenu(false);
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ mr: 1 }}>
          View:
        </Typography>
        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={handleViewModeChange}
          size="small"
        >
          <ToggleButton value="list" aria-label="list view">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="grid" aria-label="grid view">
            <GridViewIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};

export default RaidsSorting;
