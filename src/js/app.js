export default function setHealth(hp) {
  if (hp.health > 50) {
    return 'healthy';
  } if (hp.health <= 50 && hp.health > 15) {
    return 'wounded';
  }
  return 'critical';
}
