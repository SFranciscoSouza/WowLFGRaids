import { useState, useMemo } from 'react';
import { Card, CardHeader, Divider, Box, Typography } from '@mui/material';
import RaidsFilters from './RaidsFilters';
import RaidsSorting from './RaidsSorting';
import RaidsGrid from './RaidsGrid';
import { mockRaidPosts } from './mockRaids';
import { RaidFilters, SortOption, RaidPost } from 'src/models/raid';

function RaidsList() {
  const [filters, setFilters] = useState<RaidFilters>({});
  const [sortOption, setSortOption] = useState<SortOption>('posted_desc');

  const applyFilters = (raids: RaidPost[]): RaidPost[] => {
    return raids.filter((raid) => {
      if (filters.gameVersion && raid.gameVersion !== filters.gameVersion) {
        return false;
      }

      if (filters.expansion && raid.expansion !== filters.expansion) {
        return false;
      }

      if (filters.raidName && raid.raidName !== filters.raidName) {
        return false;
      }

      if (filters.difficulty && raid.difficulty !== filters.difficulty) {
        return false;
      }

      if (filters.faction && raid.faction !== filters.faction) {
        return false;
      }

      if (filters.minPrice && raid.price < filters.minPrice) {
        return false;
      }

      if (filters.maxPrice && raid.price > filters.maxPrice) {
        return false;
      }

      if (filters.rolesNeeded && filters.rolesNeeded.length > 0) {
        const hasMatchingRole = filters.rolesNeeded.some((role) =>
          raid.rolesNeeded.includes(role)
        );
        if (!hasMatchingRole) {
          return false;
        }
      }

      return true;
    });
  };

  const applySorting = (raids: RaidPost[]): RaidPost[] => {
    const sorted = [...raids];

    switch (sortOption) {
      case 'price_asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'posted_desc':
        sorted.sort((a, b) => b.postedAt - a.postedAt);
        break;
      case 'posted_asc':
        sorted.sort((a, b) => a.postedAt - b.postedAt);
        break;
      case 'signups_desc':
        sorted.sort((a, b) => b.signups - a.signups);
        break;
      case 'karma_desc':
        sorted.sort((a, b) => b.poster.karma - a.poster.karma);
        break;
      default:
        break;
    }

    return sorted;
  };

  const filteredAndSortedRaids = useMemo(() => {
    const filtered = applyFilters(mockRaidPosts);
    return applySorting(filtered);
  }, [filters, sortOption]);

  return (
    <Card>
      <CardHeader
        title="Available Raid Runs"
        subheader={
          <Typography variant="body2" color="text.secondary">
            {filteredAndSortedRaids.length} raid
            {filteredAndSortedRaids.length !== 1 ? 's' : ''} available
          </Typography>
        }
      />
      <Divider />
      <Box sx={{ p: 3 }}>
        <RaidsFilters filters={filters} onFilterChange={setFilters} />
        <Divider sx={{ my: 2 }} />
        <RaidsSorting sortOption={sortOption} onSortChange={setSortOption} />
        <RaidsGrid raids={filteredAndSortedRaids} />
      </Box>
    </Card>
  );
}

export default RaidsList;
