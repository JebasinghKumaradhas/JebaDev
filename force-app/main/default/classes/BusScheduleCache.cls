public class BusScheduleCache {   
    // Get partition
    private Cache.OrgPartition part;
    String partitionName = 'local.BusSchedule';
    
    public BusScheduleCache() {
        if(partitionName !=null){
            Cache.OrgPartition orgPartition = new Cache.OrgPartition(partitionName);
            if(orgPartition != null){
                part = orgPartition;
            }
        }
    }
    
    public void putSchedule(String busLine, Time[] schedule) {
        if (part != null){
            part.put(busline, schedule);
        }
    }
        
    public Time[] getSchedule(String busLine) {
        Time[] schedule = new List<Time>();
        
        // Get a cached value
        Object obj = part.get(busLine);
        // Cast return value to a specific data type
        Time t1;
        if (obj != null) {
            t1 = (Time)obj;
        }
        if (t1 != null) {
            schedule.add(t1);
        }
        else {
            Time t2 = Time.newInstance(8,0,0,0);
            if (t2 != null){
                schedule.add(t2);
            }
            Time t3 = Time.newInstance(17,0,0,0);
            if (t3 != null){
                schedule.add(t3);
            }
        }     
        return schedule;
    } 
      
}