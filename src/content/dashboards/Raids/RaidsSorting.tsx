import { FC, useRef, useState } from 'react';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { SortOption } from 'src/models/raid';

interface RaidsSortingProps {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'posted_desc', label: 'Newest First' },
  { value: 'posted_asc', label: 'Oldest First' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'signups_desc', label: 'Most Signups' },
  { value: 'karma_desc', label: 'Highest Karma' }
];

const RaidsSorting: FC<RaidsSortingProps> = ({ sortOption, onSortChange }) => {
  const actionRef = useRef<HTMLButtonElement | null>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const currentLabel =
    sortOptions.find((opt) => opt.value === sortOption)?.label ||
    'Newest First';

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
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
  );
};

export default RaidsSorting;
