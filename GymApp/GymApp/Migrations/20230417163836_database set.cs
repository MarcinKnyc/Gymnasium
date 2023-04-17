using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GymApp.Migrations
{
    /// <inheritdoc />
    public partial class databaseset : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Client_1",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Surname = table.Column<string>(type: "text", nullable: false),
                    PhoneNumber = table.Column<string>(type: "text", nullable: false),
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Client_1", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Gym",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    City = table.Column<string>(type: "text", nullable: false),
                    Address = table.Column<string>(type: "text", nullable: false),
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gym", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pass_1",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PassName = table.Column<string>(type: "text", nullable: false),
                    PassDescription = table.Column<string>(type: "text", nullable: false),
                    Price = table.Column<float>(type: "real", nullable: false),
                    Duration = table.Column<int>(type: "integer", nullable: false),
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pass_1", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Receptionist_1",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Surname = table.Column<string>(type: "text", nullable: false),
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Receptionist_1", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Sector_1",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    SectorName = table.Column<string>(type: "text", nullable: false),
                    GymId = table.Column<Guid>(type: "uuid", nullable: false),
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sector_1", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Sector_1_Gym_GymId",
                        column: x => x.GymId,
                        principalTable: "Gym",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PassBoughtEvent_1",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    DateTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    PassId = table.Column<Guid>(type: "uuid", nullable: false),
                    ClientId = table.Column<Guid>(type: "uuid", nullable: false),
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PassBoughtEvent_1", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PassBoughtEvent_1_Client_1_ClientId",
                        column: x => x.ClientId,
                        principalTable: "Client_1",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PassBoughtEvent_1_Pass_1_PassId",
                        column: x => x.PassId,
                        principalTable: "Pass_1",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GymReceptionist",
                columns: table => new
                {
                    GymsId = table.Column<Guid>(type: "uuid", nullable: false),
                    ReceptionistsId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GymReceptionist", x => new { x.GymsId, x.ReceptionistsId });
                    table.ForeignKey(
                        name: "FK_GymReceptionist_Gym_GymsId",
                        column: x => x.GymsId,
                        principalTable: "Gym",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GymReceptionist_Receptionist_1_ReceptionistsId",
                        column: x => x.ReceptionistsId,
                        principalTable: "Receptionist_1",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Entrance_1",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PassId = table.Column<Guid>(type: "uuid", nullable: false),
                    SectorId = table.Column<Guid>(type: "uuid", nullable: false),
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entrance_1", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Entrance_1_Pass_1_PassId",
                        column: x => x.PassId,
                        principalTable: "Pass_1",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Entrance_1_Sector_1_SectorId",
                        column: x => x.SectorId,
                        principalTable: "Sector_1",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EntranceEvent_1",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    DateTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ClientId = table.Column<Guid>(type: "uuid", nullable: false),
                    EntranceId = table.Column<Guid>(type: "uuid", nullable: false),
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EntranceEvent_1", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EntranceEvent_1_Client_1_ClientId",
                        column: x => x.ClientId,
                        principalTable: "Client_1",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EntranceEvent_1_Entrance_1_EntranceId",
                        column: x => x.EntranceId,
                        principalTable: "Entrance_1",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Entrance_1_PassId",
                table: "Entrance_1",
                column: "PassId");

            migrationBuilder.CreateIndex(
                name: "IX_Entrance_1_SectorId",
                table: "Entrance_1",
                column: "SectorId");

            migrationBuilder.CreateIndex(
                name: "IX_EntranceEvent_1_ClientId",
                table: "EntranceEvent_1",
                column: "ClientId");

            migrationBuilder.CreateIndex(
                name: "IX_EntranceEvent_1_EntranceId",
                table: "EntranceEvent_1",
                column: "EntranceId");

            migrationBuilder.CreateIndex(
                name: "IX_GymReceptionist_ReceptionistsId",
                table: "GymReceptionist",
                column: "ReceptionistsId");

            migrationBuilder.CreateIndex(
                name: "IX_PassBoughtEvent_1_ClientId",
                table: "PassBoughtEvent_1",
                column: "ClientId");

            migrationBuilder.CreateIndex(
                name: "IX_PassBoughtEvent_1_PassId",
                table: "PassBoughtEvent_1",
                column: "PassId");

            migrationBuilder.CreateIndex(
                name: "IX_Sector_1_GymId",
                table: "Sector_1",
                column: "GymId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EntranceEvent_1");

            migrationBuilder.DropTable(
                name: "GymReceptionist");

            migrationBuilder.DropTable(
                name: "PassBoughtEvent_1");

            migrationBuilder.DropTable(
                name: "Entrance_1");

            migrationBuilder.DropTable(
                name: "Receptionist_1");

            migrationBuilder.DropTable(
                name: "Client_1");

            migrationBuilder.DropTable(
                name: "Pass_1");

            migrationBuilder.DropTable(
                name: "Sector_1");

            migrationBuilder.DropTable(
                name: "Gym");
        }
    }
}
