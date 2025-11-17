import { FC, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Collapse,
  Grid,
  Typography,
  Avatar,
  Badge,
  Chip,
  LinearProgress,
  Divider,
  AvatarGroup,
  Tooltip,
  useTheme,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import TagIcon from '@mui/icons-material/Tag';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import PersonIcon from '@mui/icons-material/Person';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {
  RaidPost,
  formatGold,
  getDifficultyLabel,
  getDifficultyColor,
  WoWClass
} from 'src/models/raid';
import Text from 'src/components/Text';
import { ViewMode } from './RaidsSorting';
import { format, isToday, isTomorrow, differenceInHours } from 'date-fns';

interface RaidsGridProps {
  raids: RaidPost[];
  viewMode: ViewMode;
}

const RaidCard = styled(Card)(
  ({ theme }) => `
    margin-bottom: ${theme.spacing(1)};
    background: ${theme.colors.alpha.black[5]};
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    position: relative;

    &:hover {
      transform: translateY(-2px);
    }
`
);

const PosterAvatar = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
    border: 2px solid ${theme.colors.primary.main};
`
);

const RoleIconImage = styled('img')`
  width: 20px;
  height: 20px;
`;

const FactionIconImage = styled('img')`
  width: 18px;
  height: 18px;
`;

const GoldIconImage = styled('img')`
  width: 20px;
  height: 20px;
`;

const StatsBox = styled(Box)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    gap: ${theme.spacing(0.5)};
`
);

const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
    flex-grow: 1;
    height: 8px;

    &.MuiLinearProgress-root {
      background-color: ${theme.colors.alpha.black[10]};
    }

    .MuiLinearProgress-bar {
      border-radius: ${theme.general.borderRadiusXl};
    }
`
);

const SectionTitle = styled(Typography)(
  ({ theme }) => `
    margin-bottom: ${theme.spacing(1)};
    font-weight: bold;
`
);

const formatScheduledTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  const hoursUntil = differenceInHours(date, new Date());

  if (hoursUntil < 0) {
    return 'Started';
  }

  if (hoursUntil < 1) {
    return 'Starting soon';
  }

  if (isToday(date)) {
    return `Today ${format(date, 'h:mm a')}`;
  }

  if (isTomorrow(date)) {
    return `Tomorrow ${format(date, 'h:mm a')}`;
  }

  // Within a week
  if (hoursUntil < 168) {
    return format(date, 'EEE h:mm a');
  }

  // More than a week away
  return format(date, 'MMM d h:mm a');
};

const formatScheduledTimeFull = (timestamp: number): string => {
  const date = new Date(timestamp);
  return format(date, 'EEEE, MMMM d, yyyy @ h:mm a');
};

const formatClassName = (className: WoWClass): string => {
  return className
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const RaidsGrid: FC<RaidsGridProps> = ({ raids, viewMode }) => {
  const theme = useTheme();
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>(
    {}
  );

  const handleExpandClick = (raidId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [raidId]: !prev[raidId]
    }));
  };

  if (raids.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h4" color="text.secondary">
          No raids found matching your filters
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Try adjusting your filter criteria
        </Typography>
      </Box>
    );
  }

  const getRiskIcon = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low':
        return (
          <CheckCircleIcon
            sx={{ color: theme.colors.success.main, fontSize: 18 }}
          />
        );
      case 'medium':
        return (
          <WarningIcon
            sx={{ color: theme.colors.warning.main, fontSize: 18 }}
          />
        );
      case 'high':
        return (
          <ErrorIcon sx={{ color: theme.colors.error.main, fontSize: 18 }} />
        );
      default:
        return null;
    }
  };

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low':
        return 'success';
      case 'medium':
        return 'warning';
      case 'high':
        return 'error';
      default:
        return 'secondary';
    }
  };

  const getMarketComparison = (price: number, marketAverage: number) => {
    const diff = ((price - marketAverage) / marketAverage) * 100;
    if (diff > 5) {
      return { text: 'Above Market', color: theme.colors.success.main };
    }
    if (diff < -5) {
      return { text: 'Below Market', color: theme.colors.error.main };
    }
    return { text: 'At Market', color: theme.colors.info.main };
  };

  const getTimeUrgencyColor = (timestamp: number) => {
    const hoursUntil = differenceInHours(new Date(timestamp), new Date());
    if (hoursUntil < 2) return theme.colors.error.main;
    if (hoursUntil < 6) return theme.colors.warning.main;
    return theme.colors.success.main;
  };

  const getTimeUntilRaid = (timestamp: number): string => {
    const hoursUntil = differenceInHours(new Date(timestamp), new Date());
    const now = new Date();
    const raidTime = new Date(timestamp);

    if (hoursUntil < 0) {
      return 'Started';
    }

    const diffInMinutes = Math.floor((raidTime.getTime() - now.getTime()) / 60000);

    if (diffInMinutes < 60) {
      return `${diffInMinutes}m`;
    }

    if (hoursUntil < 24) {
      const remainingMinutes = diffInMinutes % 60;
      return `${hoursUntil}h ${remainingMinutes}m`;
    }

    const days = Math.floor(hoursUntil / 24);
    const remainingHours = hoursUntil % 24;
    return `${days}d ${remainingHours}h`;
  };

  const getRaidTooltip = (raid: RaidPost) => {
    const timeUntil = getTimeUntilRaid(raid.scheduledTime);
    const spotsLeft = raid.maxBuyers - raid.currentBuyers;
    const isFull = spotsLeft === 0;

    return (
      <Box>
        {/* Time Until Raid */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 1,
          pb: 1,
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <AccessTimeIcon sx={{ fontSize: 16, color: '#5569ff' }} />
          <Box>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.65rem',
                lineHeight: 1
              }}
            >
              Starts in
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 'bold',
                color: '#fff',
                fontSize: '0.875rem',
                lineHeight: 1.2
              }}
            >
              {timeUntil}
            </Typography>
          </Box>
        </Box>

        {/* Buyer Slots */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PersonIcon sx={{ fontSize: 16, color: isFull ? '#f44336' : '#4caf50' }} />
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.65rem',
                lineHeight: 1
              }}
            >
              Buyer Slots
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 'bold',
                color: isFull ? '#f44336' : '#4caf50',
                fontSize: '0.875rem',
                lineHeight: 1.2
              }}
            >
              {isFull ? 'FULL' : `${spotsLeft} left`}
            </Typography>
          </Box>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.7rem'
            }}
          >
            {raid.currentBuyers}/{raid.maxBuyers}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Grid container spacing={1}>
      {raids.map((raid) => (
        <Grid
          item
          xs={12}
          sm={viewMode === 'grid' ? 6 : 12}
          md={viewMode === 'grid' ? 4 : 12}
          key={raid.id}
        >
          <Tooltip
            title={getRaidTooltip(raid)}
            arrow
            placement="top"
            enterDelay={200}
            leaveDelay={0}
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: 'rgba(17, 25, 54, 0.98)',
                  border: '1px solid rgba(85, 105, 255, 0.3)',
                  borderRadius: '8px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  padding: '12px',
                  maxWidth: 200,
                  '& .MuiTooltip-arrow': {
                    color: 'rgba(17, 25, 54, 0.98)',
                    '&::before': {
                      border: '1px solid rgba(85, 105, 255, 0.3)'
                    }
                  }
                }
              }
            }}
          >
            <RaidCard onClick={() => handleExpandClick(raid.id)}>
            <Box sx={{ p: 1 }}>
              {viewMode === 'list' ? (
                <Grid container spacing={1} alignItems="center">
                  {/* Poster Avatar */}
                  <Grid item xs="auto">
                    <Badge
                      overlap="circular"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      variant="dot"
                      color={raid.poster.isOnline ? 'success' : 'error'}
                    >
                      <PosterAvatar
                        src={raid.poster.avatar}
                        alt={raid.poster.name}
                      />
                    </Badge>
                  </Grid>

                  {/* Raid Name & Difficulty */}
                  <Grid item xs={3}>
                    <Typography variant="subtitle1" noWrap>
                      <Text color="info">{raid.raidName}</Text>
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 0.5,
                        mt: 0.5
                      }}
                    >
                      <Chip
                        size="small"
                        label={getDifficultyLabel(raid.difficulty)}
                        color={getDifficultyColor(raid.difficulty)}
                        sx={{ height: 20, fontSize: '0.7rem' }}
                      />
                      <Chip
                        size="small"
                        label={raid.gameVersion.toUpperCase()}
                        variant="outlined"
                        sx={{ height: 20, fontSize: '0.7rem' }}
                      />
                    </Box>
                  </Grid>

                  {/* Scheduled Time - MOST IMPORTANT */}
                  <Grid item xs={2}>
                    <StatsBox>
                      <AccessTimeIcon
                        sx={{
                          fontSize: 18,
                          color: getTimeUrgencyColor(raid.scheduledTime)
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 'bold',
                          color: getTimeUrgencyColor(raid.scheduledTime)
                        }}
                      >
                        {formatScheduledTime(raid.scheduledTime)}
                      </Typography>
                    </StatsBox>
                  </Grid>

                  {/* Price */}
                  <Grid item xs={1.5}>
                    <StatsBox>
                      <GoldIconImage
                        src="/static/images/icons/Gold.svg"
                        alt="Gold"
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: theme.colors.warning.main,
                          fontWeight: 'bold'
                        }}
                      >
                        {formatGold(raid.price)}
                      </Typography>
                    </StatsBox>
                  </Grid>

                  {/* Faction & Server */}
                  <Grid item xs={2}>
                    <StatsBox>
                      <FactionIconImage
                        src={`/static/images/icons/${
                          raid.faction === 'horde' ? 'Horde' : 'Alliance'
                        }.svg`}
                        alt={raid.faction}
                      />
                      <Typography variant="body2" noWrap>
                        {raid.server}
                      </Typography>
                    </StatsBox>
                  </Grid>

                  {/* Buyers */}
                  <Grid item xs={1}>
                    <Typography variant="body2">
                      {raid.currentBuyers}/{raid.maxBuyers}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      buyers
                    </Typography>
                  </Grid>

                  {/* Saved Status */}
                  <Grid item xs="auto">
                    {raid.isSaved ? (
                      <BookmarkIcon
                        sx={{ fontSize: 20, color: theme.colors.primary.main }}
                      />
                    ) : (
                      <BookmarkBorderIcon
                        sx={{ fontSize: 20, color: 'text.secondary' }}
                      />
                    )}
                  </Grid>

                  {/* Signup Button */}
                  <Grid item xs="auto">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{
                        minWidth: 80,
                        fontSize: '0.75rem',
                        py: 0.5
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('Signup for raid:', raid.id);
                      }}
                    >
                      Signup
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                /* Grid View - Compact Card Layout */
                <Box>
                  {/* Header with Raid Name */}
                  <Typography variant="subtitle1" noWrap sx={{ mb: 0.5 }}>
                    <Text color="info">{raid.raidName}</Text>
                  </Typography>

                  {/* Chips */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 0.5,
                      mb: 1
                    }}
                  >
                    <Chip
                      size="small"
                      label={getDifficultyLabel(raid.difficulty)}
                      color={getDifficultyColor(raid.difficulty)}
                      sx={{ height: 20, fontSize: '0.65rem' }}
                    />
                    <Chip
                      size="small"
                      label={raid.gameVersion.toUpperCase()}
                      variant="outlined"
                      sx={{ height: 20, fontSize: '0.65rem' }}
                    />
                    {raid.isSaved && (
                      <BookmarkIcon
                        sx={{
                          fontSize: 16,
                          color: theme.colors.primary.main
                        }}
                      />
                    )}
                  </Box>

                  {/* Scheduled Time - PROMINENT */}
                  <StatsBox sx={{ mb: 0.5 }}>
                    <AccessTimeIcon
                      sx={{
                        fontSize: 16,
                        color: getTimeUrgencyColor(raid.scheduledTime)
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 'bold',
                        color: getTimeUrgencyColor(raid.scheduledTime)
                      }}
                    >
                      {formatScheduledTime(raid.scheduledTime)}
                    </Typography>
                  </StatsBox>

                  {/* Price */}
                  <StatsBox sx={{ mb: 0.5 }}>
                    <GoldIconImage
                      src="/static/images/icons/Gold.svg"
                      alt="Gold"
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{ color: theme.colors.warning.main }}
                    >
                      {formatGold(raid.price)}
                    </Typography>
                  </StatsBox>

                  {/* Server and Faction */}
                  <StatsBox sx={{ mb: 0.5 }}>
                    <FactionIconImage
                      src={`/static/images/icons/${
                        raid.faction === 'horde' ? 'Horde' : 'Alliance'
                      }.svg`}
                      alt={raid.faction}
                    />
                    <Typography variant="caption">{raid.server}</Typography>
                  </StatsBox>

                  {/* Buyers */}
                  <Typography variant="caption" color="text.secondary">
                    {raid.currentBuyers}/{raid.maxBuyers} buyers
                  </Typography>

                  {/* Action Button */}
                  <Box sx={{ mt: 1 }} onClick={(e) => e.stopPropagation()}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      fullWidth
                      sx={{ fontSize: '0.7rem', py: 0.5 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('Signup for raid:', raid.id);
                      }}
                    >
                      Signup
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>

            {/* Expanded Content */}
            <Collapse
              in={expandedCards[raid.id] || false}
              timeout="auto"
              unmountOnExit
            >
              <CardContent sx={{ pt: 0 }}>
                <Divider sx={{ mb: 2 }} />
                <Grid container spacing={2}>
                  {/* Full Scheduled Time */}
                  <Grid item xs={12}>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      <AccessTimeIcon
                        sx={{
                          fontSize: 20,
                          mr: 1,
                          verticalAlign: 'middle'
                        }}
                      />
                      {formatScheduledTimeFull(raid.scheduledTime)}
                    </Typography>
                  </Grid>

                  {/* Poster Info */}
                  <Grid item xs={12} sm={6} md={3}>
                    <SectionTitle variant="subtitle2">
                      <Text color="black">Organizer:</Text>
                    </SectionTitle>
                    <StatsBox>
                      <Badge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right'
                        }}
                        variant="dot"
                        color={raid.poster.isOnline ? 'success' : 'error'}
                      >
                        <Avatar
                          src={raid.poster.avatar}
                          alt={raid.poster.name}
                          sx={{ width: 32, height: 32 }}
                        />
                      </Badge>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                          {raid.poster.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {raid.poster.tier.charAt(0).toUpperCase() +
                            raid.poster.tier.slice(1)}{' '}
                          Tier
                        </Typography>
                      </Box>
                    </StatsBox>
                  </Grid>

                  {/* Credibility Section */}
                  <Grid item xs={12} sm={6} md={3}>
                    <SectionTitle variant="subtitle2">
                      <Text color="black">Trust Score:</Text>
                    </SectionTitle>
                    <Typography variant="body2">
                      {raid.credibility.totalReviews} Reviews:{' '}
                      {raid.credibility.averageRating.toFixed(1)}/10
                    </Typography>
                    <StatsBox sx={{ mt: 0.5 }}>
                      {getRiskIcon(raid.credibility.riskLevel)}
                      <Typography variant="body2">
                        <Text color={getRiskColor(raid.credibility.riskLevel)}>
                          {raid.credibility.riskLevel.charAt(0).toUpperCase() +
                            raid.credibility.riskLevel.slice(1)}{' '}
                          Risk
                        </Text>
                      </Typography>
                    </StatsBox>
                  </Grid>

                  {/* Details Section */}
                  <Grid item xs={12} sm={6} md={3}>
                    <SectionTitle variant="subtitle2">
                      <Text color="black">Run Details:</Text>
                    </SectionTitle>
                    <StatsBox>
                      <TagIcon
                        sx={{
                          fontSize: 16,
                          color: theme.colors.success.main
                        }}
                      />
                      <Typography variant="body2">
                        {raid.numberOfRuns} Run
                        {raid.numberOfRuns > 1 ? 's' : ''}
                      </Typography>
                    </StatsBox>
                    <StatsBox sx={{ mt: 0.5 }}>
                      <TimerOutlinedIcon
                        sx={{
                          fontSize: 16,
                          color: theme.colors.primary.main
                        }}
                      />
                      <Typography variant="body2">
                        {raid.isTimed ? 'Timed' : 'Untimed'}
                      </Typography>
                    </StatsBox>
                    <StatsBox sx={{ mt: 0.5 }}>
                      <PersonIcon sx={{ fontSize: 16 }} />
                      <Typography variant="body2">
                        {raid.currentBuyers}/{raid.maxBuyers} Buyers
                      </Typography>
                    </StatsBox>
                  </Grid>

                  {/* Price Comparison */}
                  <Grid item xs={12} sm={6} md={3}>
                    <SectionTitle variant="subtitle2">
                      <Text color="black">Price Info:</Text>
                    </SectionTitle>
                    <StatsBox>
                      <GoldIconImage
                        src="/static/images/icons/Gold.svg"
                        alt="Gold"
                      />
                      <Typography variant="body2">
                        {formatGold(raid.price)}
                      </Typography>
                    </StatsBox>
                    <StatsBox sx={{ mt: 0.5 }}>
                      <RocketLaunchIcon
                        sx={{
                          fontSize: 16,
                          color: getMarketComparison(
                            raid.price,
                            raid.marketAveragePrice
                          ).color
                        }}
                      />
                      <Typography variant="body2">
                        {
                          getMarketComparison(
                            raid.price,
                            raid.marketAveragePrice
                          ).text
                        }
                      </Typography>
                    </StatsBox>
                  </Grid>

                  {/* Filling Progress Section */}
                  <Grid item xs={12} sm={6} md={4}>
                    <SectionTitle variant="subtitle2">
                      <Text color="black">Group Status:</Text>
                    </SectionTitle>
                    {raid.roleSlots.map((slot) => (
                      <Box key={slot.role} sx={{ mb: 0.5 }}>
                        <StatsBox>
                          <RoleIconImage
                            src={`/static/images/icons/${
                              slot.role.charAt(0).toUpperCase() +
                              slot.role.slice(1)
                            }.svg`}
                            alt={slot.role}
                          />
                          <Typography variant="caption">
                            {slot.role.charAt(0).toUpperCase() +
                              slot.role.slice(1)}
                            : {slot.current}/{slot.max}
                          </Typography>
                        </StatsBox>
                        <LinearProgressWrapper
                          variant="determinate"
                          value={(slot.current / slot.max) * 100}
                          color={
                            slot.current === slot.max ? 'success' : 'primary'
                          }
                        />
                      </Box>
                    ))}
                  </Grid>

                  {/* Current Group Section */}
                  <Grid item xs={12} sm={6} md={4}>
                    <SectionTitle variant="subtitle2">
                      <Text color="black">Current Group:</Text>
                    </SectionTitle>
                    {raid.groupMembers.length > 0 ? (
                      <AvatarGroup max={8}>
                        {raid.groupMembers.map((member) => (
                          <Tooltip
                            key={member.id}
                            title={`${member.name} - ${formatClassName(
                              member.class
                            )} (${
                              member.role.charAt(0).toUpperCase() +
                              member.role.slice(1)
                            })`}
                            arrow
                          >
                            <Avatar
                              src={member.avatar}
                              alt={member.name}
                              sx={{ width: 28, height: 28 }}
                            />
                          </Tooltip>
                        ))}
                      </AvatarGroup>
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        No members yet
                      </Typography>
                    )}
                  </Grid>

                  {/* Buyer Participation */}
                  <Grid item xs={12} sm={6} md={4}>
                    <SectionTitle variant="subtitle2">
                      <Text color="black">Your Participation:</Text>
                    </SectionTitle>
                    <Typography variant="body2">
                      {raid.buyerInfo.willParticipate ? (
                        <Text color="success">
                          You will participate in the run
                        </Text>
                      ) : (
                        <Text color="warning">
                          AFK run - no participation needed
                        </Text>
                      )}
                    </Typography>
                  </Grid>

                  {/* Note Section */}
                  {raid.note && (
                    <Grid item xs={12}>
                      <SectionTitle variant="subtitle2">
                        <Text color="black">Additional Info:</Text>
                      </SectionTitle>
                      <Typography variant="body2">{raid.note}</Typography>
                    </Grid>
                  )}
                </Grid>
              </CardContent>
            </Collapse>
          </RaidCard>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  );
};

export default RaidsGrid;
