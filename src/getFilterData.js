
import * as logs from './data.json';

const filterParams = {
    from: 168030360000,
    to: 16869528000000,
    moduleName: "Clients",
    userName: "Alice Smith"
}

const filteredLogs = logs.filter(log => {
    const accessedAt = new Date(log.record_accessed_at);
    console.log(accessedAt, new Date(filterParams.from), new Date(filterParams.to), accessedAt >= new Date(filterParams.from))
    return (
        accessedAt >= new Date(filterParams.from) &&
        accessedAt <= new Date(filterParams.to) &&
        log.module === filterParams.moduleName &&
        log.user.includes(filterParams.userName)
    );
});
console.log(filteredLogs);
