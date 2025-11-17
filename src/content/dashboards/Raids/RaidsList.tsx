import { useState, useMemo } from 'react';
import {
  Card,
  CardHeader,
  Divider,
  Box,
  Typography,
  Pagination
} from '@mui/material';
import RaidsFilters from './RaidsFilters';
import RaidsSorting, { ViewMode } from './RaidsSorting';
import RaidsGrid from './RaidsGrid';
import { mockRaidPosts } from './mockRaids';
import { RaidFilters, SortOption, RaidPost } from 'src/models/raid';

const ITEMS_PER_PAGE = 10;

function RaidsList() {
  const [filters, setFilters] = useState<RaidFilters>({});
  const [sortOption, setSortOption] = useState<SortOption>('posted_desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<ViewMode>('list');

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

      if (filters.isSaved !== undefined && raid.isSaved !== filters.isSaved) {
        return false;
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

  const totalPages = Math.ceil(filteredAndSortedRaids.length / ITEMS_PER_PAGE);

  const paginatedRaids = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredAndSortedRaids.slice(startIndex, endIndex);
  }, [filteredAndSortedRaids, currentPage]);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (newFilters: RaidFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleSortChange = (newSort: SortOption) => {
    setSortOption(newSort);
    setCurrentPage(1);
  };

  const handleViewModeChange = (newMode: ViewMode) => {
    setViewMode(newMode);
  };

  return (
    <Card>
      <CardHeader
        title="Available Raid Runs"
        subheader={
          <Typography variant="body2" color="text.secondary">
            {filteredAndSortedRaids.length} raid
            {filteredAndSortedRaids.length !== 1 ? 's' : ''} available
            {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
          </Typography>
        }
      />
      <Divider />
      <Box sx={{ p: 3 }}>
        <RaidsFilters filters={filters} onFilterChange={handleFilterChange} />
        <Divider sx={{ my: 2 }} />
        <RaidsSorting
          sortOption={sortOption}
          onSortChange={handleSortChange}
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
        />
        <RaidsGrid raids={paginatedRaids} viewMode={viewMode} />
        {totalPages > 1 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 3
            }}
          >
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
            />
          </Box>
        )}
      </Box>
    </Card>
  );
}

export default RaidsList;
