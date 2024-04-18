function solution(bandage, health, attacks) {
    const max_health = health;
    const [skill_time, recovery, bonus] = bandage;
    let prev_attack_time = 0;
    let end_of_game = true;
    attacks.some(([time, dmg], idx)=>{
        health += ((time - 1 - prev_attack_time) * recovery);
        console.log(`+ ${(time - 1 - prev_attack_time) * recovery}`)
        
        if(time - 1 - prev_attack_time >= skill_time) {
            const cnt = ~~((time - 1 - prev_attack_time) / skill_time)
            console.log(`보너스 * ${cnt}`)
            health += (bonus * cnt);
        }
        
        if(health > max_health) {
            console.log('가득')
            health = max_health;
        }
        
        health -= dmg
        console.log(`공격 -${dmg}`)
        
        if(health <= 0) {
            console.log('체력 없음 게임 끗')
            end_of_game = false;
            return true;
        }
        
        prev_attack_time = time
        return false;
    })
    if(!end_of_game) {
        return -1;
    }
    return health
}