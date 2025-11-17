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
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import TagIcon from '@mui/icons-material/Tag';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import PersonIcon from '@mui/icons-material/Person';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StarIcon from '@mui/icons-material/Star';
import BalanceIcon from '@mui/icons-material/Balance';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import HelpIcon from '@mui/icons-material/Help';
import {
  RaidPost,
  formatGold,
  getDifficultyLabel,
  getDifficultyColor,
  WoWClass
} from 'src/models/raid';
import Text from 'src/components/Text';

interface RaidsGridProps {
  raids: RaidPost[];
}

const RaidCard = styled(Card)(
  ({ theme }) => `
    margin-bottom: ${theme.spacing(2)};
    background: ${theme.colors.alpha.black[5]};
    transition: transform 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
    }
`
);

const PosterAvatar = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(7)};
    height: ${theme.spacing(7)};
    border: 2px solid ${theme.colors.primary.main};
`
);

const RoleIconImage = styled('img')`
  width: 24px;
  height: 24px;
`;

const FactionIconImage = styled('img')`
  width: 20px;
  height: 20px;
`;

const GoldIconImage = styled('img')`
  width: 24px;
  height: 24px;
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
    height: 10px;

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

const formatTimeAgo = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return 'Just now';
};

const formatClassName = (className: WoWClass): string => {
  return className
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const RaidsGrid: FC<RaidsGridProps> = ({ raids }) => {
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
            sx={{ color: theme.colors.success.main, fontSize: 20 }}
          />
        );
      case 'medium':
        return (
          <WarningIcon
            sx={{ color: theme.colors.warning.main, fontSize: 20 }}
          />
        );
      case 'high':
        return (
          <ErrorIcon sx={{ color: theme.colors.error.main, fontSize: 20 }} />
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
      return { text: 'Above Market Average', color: theme.colors.success.main };
    }
    if (diff < -5) {
      return { text: 'Below Market Average', color: theme.colors.error.main };
    }
    return { text: 'At Market Average', color: theme.colors.info.main };
  };

  return (
    <Grid container spacing={2}>
      {raids.map((raid) => (
        <Grid item xs={12} key={raid.id}>
          <RaidCard onClick={() => handleExpandClick(raid.id)}>
            <Box sx={{ p: 2 }}>
              <Grid container spacing={2} alignItems="center">
                {/* Poster Avatar */}
                <Grid item xs={12} md={1}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
                  </Box>
                </Grid>

                {/* Main Card Content */}
                <Grid item xs={12} md={11}>
                  <Box sx={{ p: 1 }}>
                    <Grid container spacing={2}>
                      {/* Raid Info */}
                      <Grid item xs={12} sm={6} md={3.5}>
                        <Box>
                          <Typography variant="h4">
                            <Text color="info">{raid.raidName}</Text>
                          </Typography>
                          <Box sx={{ mt: 1 }}>
                            <Chip
                              size="small"
                              label={getDifficultyLabel(raid.difficulty)}
                              color={getDifficultyColor(raid.difficulty)}
                            />
                            <Chip
                              size="small"
                              label={raid.gameVersion.toUpperCase()}
                              variant="outlined"
                              sx={{ ml: 1 }}
                            />
                          </Box>
                          <Box sx={{ mt: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                              <Text color="warning">
                                {raid.avgPayTime} Avg Pay
                              </Text>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <Text color="secondary">
                                {raid.payLimit} Pay Limit
                              </Text>
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>

                      {/* Price and Time */}
                      <Grid item xs={12} sm={6} md={3}>
                        <Box>
                          <StatsBox>
                            <GoldIconImage
                              src="/static/images/icons/Gold.svg"
                              alt="Gold"
                            />
                            <Typography
                              variant="h3"
                              sx={{ color: theme.colors.warning.main }}
                            >
                              {formatGold(raid.price)}
                            </Typography>
                          </StatsBox>
                          <Typography
                            variant="subtitle2"
                            sx={{ mt: 1, color: theme.colors.warning.main }}
                          >
                            Posted {formatTimeAgo(raid.postedAt)}
                          </Typography>
                        </Box>
                      </Grid>

                      {/* Faction and Server */}
                      <Grid item xs={12} sm={6} md={2.5}>
                        <Box>
                          <StatsBox>
                            <FactionIconImage
                              src={`/static/images/icons/${
                                raid.faction === 'horde' ? 'Horde' : 'Alliance'
                              }.svg`}
                              alt={raid.faction}
                            />
                            <Typography
                              variant="h5"
                              sx={{
                                color:
                                  raid.faction === 'horde'
                                    ? theme.colors.error.main
                                    : theme.colors.info.main,
                                textTransform: 'capitalize'
                              }}
                            >
                              {raid.server}
                            </Typography>
                          </StatsBox>
                          <Box sx={{ mt: 1 }}>
                            <StatsBox>
                              <Typography variant="body2">
                                {raid.poster.credit.toFixed(2)} Credit
                              </Typography>
                              <HelpIcon
                                sx={{ fontSize: 14 }}
                                color="primary"
                              />
                            </StatsBox>
                            <StatsBox>
                              <Typography variant="body2">
                                {raid.poster.karma} Karma
                              </Typography>
                              <HelpIcon
                                sx={{ fontSize: 14 }}
                                color="primary"
                              />
                            </StatsBox>
                          </Box>
                        </Box>
                      </Grid>

                      {/* Roles and Signups */}
                      <Grid item xs={12} sm={6} md={3}>
                        <Box>
                          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                            LF:
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {raid.rolesNeeded.includes('tank') && (
                              <RoleIconImage
                                src="/static/images/icons/Tank.svg"
                                alt="Tank"
                              />
                            )}
                            {raid.rolesNeeded.includes('healer') && (
                              <RoleIconImage
                                src="/static/images/icons/Healer.svg"
                                alt="Healer"
                              />
                            )}
                            {raid.rolesNeeded.includes('dps') && (
                              <RoleIconImage
                                src="/static/images/icons/DPS.svg"
                                alt="DPS"
                              />
                            )}
                          </Box>
                          <Typography
                            variant="subtitle2"
                            sx={{ mt: 1, color: theme.colors.warning.main }}
                          >
                            {raid.signups} Signups
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Expanded Content */}
            <Collapse
              in={expandedCards[raid.id] || false}
              timeout="auto"
              unmountOnExit
            >
              <CardContent>
                <Divider sx={{ mb: 3 }} />
                <Grid container spacing={3}>
                  {/* Credibility Section */}
                  <Grid item xs={12} sm={6} md={3}>
                    <SectionTitle variant="h5">
                      <Text color="black">Credibility:</Text>
                    </SectionTitle>
                    <Typography variant="body2">
                      {raid.credibility.totalReviews} Reviews:{' '}
                      {raid.credibility.averageRating.toFixed(2)}/10
                    </Typography>
                    <Typography variant="body2">
                      <Text color="warning">
                        +{raid.credibility.karmaChange.toFixed(2)} Karma
                      </Text>
                    </Typography>
                    <StatsBox sx={{ mt: 1 }}>
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
                    <SectionTitle variant="h5">
                      <Text color="black">Details:</Text>
                    </SectionTitle>
                    <StatsBox>
                      <Avatar
                        sx={{
                          bgcolor: theme.colors.success.main,
                          width: 24,
                          height: 24
                        }}
                      >
                        <TagIcon sx={{ fontSize: 16 }} />
                      </Avatar>
                      <Typography variant="body1">
                        {raid.numberOfRuns} Run
                        {raid.numberOfRuns > 1 ? 's' : ''}
                      </Typography>
                    </StatsBox>
                    <StatsBox sx={{ mt: 0.5 }}>
                      <Avatar
                        sx={{
                          bgcolor: theme.colors.primary.main,
                          width: 24,
                          height: 24
                        }}
                      >
                        <TimerOutlinedIcon sx={{ fontSize: 16 }} />
                      </Avatar>
                      <Typography variant="body1">
                        {raid.isTimed ? 'Timed' : 'Untimed'}
                      </Typography>
                    </StatsBox>
                    <StatsBox sx={{ mt: 0.5 }}>
                      <Avatar sx={{ width: 24, height: 24 }}>
                        <PersonIcon sx={{ fontSize: 16 }} />
                      </Avatar>
                      <Typography variant="body1">
                        x{raid.currentBuyers}/{raid.maxBuyers} Buyers
                      </Typography>
                    </StatsBox>
                  </Grid>

                  {/* Cut Section */}
                  <Grid item xs={12} sm={6} md={3}>
                    <SectionTitle variant="h5">
                      <Text color="black">Cut:</Text>
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
                    <StatsBox sx={{ mt: 1 }}>
                      <Avatar
                        sx={{
                          bgcolor: getMarketComparison(
                            raid.price,
                            raid.marketAveragePrice
                          ).color,
                          width: 24,
                          height: 24
                        }}
                      >
                        <RocketLaunchIcon sx={{ fontSize: 16 }} />
                      </Avatar>
                      <Typography variant="body2" gutterBottom>
                        {
                          getMarketComparison(
                            raid.price,
                            raid.marketAveragePrice
                          ).text
                        }
                      </Typography>
                    </StatsBox>
                  </Grid>

                  {/* Requirements Section */}
                  <Grid item xs={12} sm={6} md={3}>
                    <SectionTitle variant="h5">
                      <Text color="black">Requirements:</Text>
                    </SectionTitle>
                    {raid.requirements.minIOScore !== undefined &&
                      raid.requirements.minIOScore > 0 && (
                        <StatsBox>
                          <Avatar sx={{ width: 24, height: 24 }}>
                            <StarIcon sx={{ fontSize: 16 }} />
                          </Avatar>
                          <Typography variant="body1">
                            {raid.requirements.minIOScore} IO
                          </Typography>
                        </StatsBox>
                      )}
                    {raid.requirements.minIlvl !== undefined && (
                      <StatsBox sx={{ mt: 0.5 }}>
                        <Avatar sx={{ width: 24, height: 24 }}>
                          <StarIcon sx={{ fontSize: 16 }} />
                        </Avatar>
                        <Typography variant="body1">
                          {raid.requirements.minIlvl} ilvl
                        </Typography>
                      </StatsBox>
                    )}
                    {raid.requirements.minRating !== undefined && (
                      <StatsBox sx={{ mt: 0.5 }}>
                        <Avatar
                          sx={{
                            bgcolor: theme.colors.warning.main,
                            width: 24,
                            height: 24
                          }}
                        >
                          <StarIcon sx={{ fontSize: 16 }} />
                        </Avatar>
                        <Typography variant="body1">
                          {raid.requirements.minRating}/10 Rating
                        </Typography>
                      </StatsBox>
                    )}
                    {raid.requirements.minKarma !== undefined && (
                      <StatsBox sx={{ mt: 0.5 }}>
                        <Avatar
                          sx={{
                            bgcolor: theme.colors.info.main,
                            width: 24,
                            height: 24
                          }}
                        >
                          <BalanceIcon sx={{ fontSize: 16 }} />
                        </Avatar>
                        <Typography variant="body1">
                          {raid.requirements.minKarma} Karma
                        </Typography>
                      </StatsBox>
                    )}
                  </Grid>

                  {/* Filling Progress Section */}
                  <Grid item xs={12} sm={6} md={3}>
                    <SectionTitle variant="h5">
                      <Text color="black">Filling Progress:</Text>
                    </SectionTitle>
                    {raid.roleSlots.map((slot) => (
                      <Box key={slot.role} sx={{ mb: 1 }}>
                        <StatsBox>
                          <RoleIconImage
                            src={`/static/images/icons/${
                              slot.role.charAt(0).toUpperCase() +
                              slot.role.slice(1)
                            }.svg`}
                            alt={slot.role}
                          />
                          <Typography variant="body2">
                            <b>
                              {slot.role.charAt(0).toUpperCase() +
                                slot.role.slice(1)}
                              : {slot.current}/{slot.max}
                            </b>
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
                  <Grid item xs={12} sm={6} md={3}>
                    <SectionTitle variant="h5">
                      <Text color="black">Current Group:</Text>
                    </SectionTitle>
                    {raid.groupMembers.length > 0 ? (
                      <AvatarGroup max={6}>
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
                              sx={{ width: 32, height: 32 }}
                            />
                          </Tooltip>
                        ))}
                      </AvatarGroup>
                    ) : (
                      <Typography variant="h5">No Members Yet</Typography>
                    )}
                  </Grid>

                  {/* Buyer Info Section */}
                  <Grid item xs={12} sm={6} md={3}>
                    <SectionTitle variant="h5">
                      <Text color="black">Buyer Info:</Text>
                    </SectionTitle>
                    <StatsBox>
                      {raid.buyerInfo.willParticipate ? (
                        <>
                          <Avatar
                            sx={{
                              bgcolor: theme.colors.success.main,
                              width: 24,
                              height: 24
                            }}
                          >
                            <CheckCircleTwoToneIcon sx={{ fontSize: 16 }} />
                          </Avatar>
                          <Typography variant="body2">
                            <Text color="success">WILL participate</Text>
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Avatar
                            sx={{
                              bgcolor: theme.colors.error.main,
                              width: 24,
                              height: 24
                            }}
                          >
                            <CancelTwoToneIcon sx={{ fontSize: 16 }} />
                          </Avatar>
                          <Typography variant="body2">
                            <Text color="error">Will NOT participate</Text>
                          </Typography>
                        </>
                      )}
                    </StatsBox>
                  </Grid>

                  {/* Karma and Credit Section */}
                  <Grid item xs={12} sm={6} md={3}>
                    <SectionTitle variant="h5">
                      <Text color="black">Karma and Credit:</Text>
                    </SectionTitle>
                    <StatsBox>
                      <Typography variant="h5">
                        {raid.poster.credit.toFixed(2)} Credit
                      </Typography>
                      <HelpIcon sx={{ fontSize: 14 }} color="primary" />
                    </StatsBox>
                    <StatsBox>
                      <Typography variant="body2">
                        {raid.poster.karma} Karma
                      </Typography>
                      <HelpIcon sx={{ fontSize: 14 }} color="primary" />
                    </StatsBox>
                  </Grid>

                  {/* Eligible Classes Section */}
                  <Grid item xs={12} sm={6} md={3}>
                    <SectionTitle variant="h5">
                      <Text color="black">Eligible Classes:</Text>
                    </SectionTitle>
                    <StatsBox>
                      <RoleIconImage
                        src="/static/images/icons/Tank.svg"
                        alt="Tank"
                      />
                      <Typography variant="body2">
                        Tanks:{' '}
                        {raid.eligibleClasses.tank === 'any'
                          ? 'Any'
                          : raid.eligibleClasses.tank
                              .map(formatClassName)
                              .join(', ')}
                      </Typography>
                    </StatsBox>
                    <StatsBox sx={{ mt: 0.5 }}>
                      <RoleIconImage
                        src="/static/images/icons/Healer.svg"
                        alt="Healer"
                      />
                      <Typography variant="body2">
                        Healers:{' '}
                        {raid.eligibleClasses.healer === 'any'
                          ? 'Any'
                          : raid.eligibleClasses.healer
                              .map(formatClassName)
                              .join(', ')}
                      </Typography>
                    </StatsBox>
                    <StatsBox sx={{ mt: 0.5 }}>
                      <RoleIconImage
                        src="/static/images/icons/DPS.svg"
                        alt="DPS"
                      />
                      <Typography variant="body2">
                        DPS:{' '}
                        {raid.eligibleClasses.dps === 'any'
                          ? 'Any'
                          : raid.eligibleClasses.dps
                              .map(formatClassName)
                              .join(', ')}
                      </Typography>
                    </StatsBox>
                  </Grid>

                  {/* Note Section */}
                  {raid.note && (
                    <Grid item xs={12}>
                      <SectionTitle variant="h5">
                        <Text color="black">Note:</Text>
                      </SectionTitle>
                      <Typography variant="body1">{raid.note}</Typography>
                    </Grid>
                  )}
                </Grid>
              </CardContent>
            </Collapse>
          </RaidCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default RaidsGrid;
